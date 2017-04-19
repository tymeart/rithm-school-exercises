const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

var users = [];
var id = 1;

app.get('/', function(req, res, next) {
  res.redirect('/users');
});

app.get('/users', function(req, res, next) {
  res.render('index', {users});
});

app.get('/users/new', function(req, res, next) {
  res.render('new');
});

app.get('/users/:id', function(req, res, next) {
  var user = users.find(val => val.id === Number(req.params.id));
  res.render('edit', {user});
});

app.get('users/:id/edit', function(req, res, next) {
  var user = users.find(val => val.id === Number(req.params.id));
  res.render('edit', {user});
});

app.post('/users', function(req, res, next) {
  users.push({
    name: req.body.name,
    id
  });
  id++;
  res.redirect('/users');
});

app.patch('/users/:id', function(req, res, next) {
  var user = users.find(val => val.id === Number(req.params.id));
  user.name = req.body.name;
  res.redirect('/users');
});

app.delete('/users/:id', function (req, res, next) {
  var userIndex = users.findIndex(val => val.id === Number(req.params.id));
  users.splice(userIndex, 1);
  res.redirect('/users');
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
