const express = require('express');
const genreController = require('./genre.controller');

const router = express.Router();

router.route('/').get(genreController.list);

module.exports = router;
