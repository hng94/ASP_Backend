const mongoose = require('mongoose');

DB_URL = 'mongodb://localhost:27017/trollo'


module.exports = function (app) {
    mongoose.connect(DB_URL,{useNewUrlParser: true})
        .then(() => {
        console.log('> Database connection established')
    })
        .catch((err) => console.error(err))
};