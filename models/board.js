const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let User = new Schema({
    name        : String,
    password    : String,
});

module.exports = mongoose.model("User", User);