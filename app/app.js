const dotEnvResult = require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dbConfig = require('./config/db');
const routes = require('./routes');

if (dotEnvResult.error) {
    throw dotEnvResult.error;
}

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(dbConfig.connectUrl);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    routes(app, {});

    const server = app.listen(3001, () => {
        console.log("app running on port.", server.address().port);
    });
});
