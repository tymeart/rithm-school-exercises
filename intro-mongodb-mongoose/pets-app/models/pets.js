const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
  name: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner'
  }
});

var Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
