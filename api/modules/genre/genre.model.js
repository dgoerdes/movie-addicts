const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    tmdbId: { type: Number, required: true },
    name: { type: String, required: true },
});

const genreListSchema = new mongoose.Schema({
    genres: [genreSchema],
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GenreList', genreListSchema);
