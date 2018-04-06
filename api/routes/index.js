const rootRoutes = require('./root.routes');
const genresRoutes = require('./genres.routes');

const appRouter = (app, db) => {
    genresRoutes(app, db);
    rootRoutes(app, db);
};

module.exports = appRouter;
