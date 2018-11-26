const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ListOfCardsSchema = new Schema({

    title       : String,
    listOfCards : Array,
    position : Number,
});

module.exports = mongoose.model("ListOfCards", ListOfCardsSchema);