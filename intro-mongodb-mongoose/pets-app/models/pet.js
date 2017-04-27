const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
  name: String
});

var Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
