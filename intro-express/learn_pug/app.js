var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var colors = ['red', 'green', 'blue'];

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', function(request, response, next) {
//   response.render('index');
// });

app.get('/', function(req, res) {
  res.render('welcome');
});

app.post('/data', function(req, res) {
  console.log('We create/update/delete some data here');
  res.redirect('/');
});

// app.post('/create-new-user', function(req, res) {
//   res.send(req.body);
// });
//
// app.get('/colors', function(request, response) {
//   response.render('data', {colors});
// });

app.listen(3000, function() {
  console.log('The server has started on port 3000.');
});
