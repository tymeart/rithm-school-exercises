var fs = require('fs');
var request = require('request');

var movieTitle = process.argv.slice(2);

request(`http://www.omdbapi.com/?t=${movieTitle}`, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log(JSON.parse(body).Plot);
  }
});

fs.appendFile('results.txt', movieTitle, function(err) {
  if (err) throw err;
  console.log(`Movie title ${movieTitle} was added to results.txt!`);
});
