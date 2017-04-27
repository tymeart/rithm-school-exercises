const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/first_mongoose_app');

mongoose.Promise = global.Promise;

module.exports.Instructor = require('./instructor');
