const rootRoutes = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send('Movie Addicts API');
    });
};

module.exports = rootRoutes;
