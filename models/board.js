const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let boardSchema = new Schema({
    titel        : String,
    owner        :  String,
    listOfLists    : Array ,
});

teststs

module.exports = mongoose.model("Board", boardSchema);