const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ListOfCards = new Schema({
    id          : ObjectId,
    titel       : String,
});

module.exports = mongoose.model("CardList", ListOfCards);