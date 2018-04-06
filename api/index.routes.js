const express = require('express');
const genreRoutes = require('./modules/genre/genre.routes');

const router = express.Router();

router.get('/health-check', (req, res) => res.send('OK'));

router.use('/genre', genreRoutes);

module.exports = router;
