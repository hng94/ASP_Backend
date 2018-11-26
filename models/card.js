const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Card = new Schema({

    titel       : String,
    description     : String,
    
    boardkey    : String,
});

module.exports = mongoose.model('Card', Card);