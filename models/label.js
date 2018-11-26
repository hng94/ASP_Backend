const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let labelSchema = new Schema({

    title       : String,
    description     : String,
    color    : String,
});

module.exports = mongoose.model('Label', labelSchema);