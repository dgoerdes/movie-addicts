const mongoose = require('mongoose');
const config = require('./config/config');
const app = require('./config/express');

const mongodbUri = `${config.mongodb.host}`;

console.log('Connecting to database ...');

mongoose.connect(mongodbUri);
mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to database: ${mongodbUri}`);
});

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
    app.listen(config.port, () => {
        console.info(`Server started on port ${config.port} - (${config.env})`);
    });
}

module.exports = app;
