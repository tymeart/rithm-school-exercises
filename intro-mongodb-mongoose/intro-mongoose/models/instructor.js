const instructorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  isHilarious: {type: Boolean, default: true},
  favoriteColors: [String],
  createdAt: {type: Date, default: Date.now}
});

var Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
