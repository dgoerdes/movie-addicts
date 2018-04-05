const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    username: String,
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
