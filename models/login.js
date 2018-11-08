const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Board = new Schema({
    id          : ObjectId,
    titel       : String,
    owner       : String,
    email       : String,
});

module.exports = mongoose.model("Board", Board);