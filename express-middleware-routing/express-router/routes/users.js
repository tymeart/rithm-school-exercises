const express = require('express');
const router = express.Router();

var users = [];
var id = 1;

router.get('/users', function(req, res, next) {
  res.render('index', {users});
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.get('/:id', function(req, res, next) {
  var user = users.find(val => val.id === Number(req.params.id));
  res.render('show', {user});
});

router.get('/:id/edit', function(req, res, next) {
  var user = users.find(val => val.id === Number(req.params.id));
  res.render('edit', {user});
});

router.post('/', function(req, res, next) {
  users.push({
    name: req.body.name,
    id: ++id
  });
  res.redirect('/users');
});

router.patch('/:id', function(req, res, next) {
  var user = users.find(val => val.id === Number(req.params.id);
  user.name = req.body.name;
  res.redirect('/users');
  });
});

router.delete('/:id', function(req, res, next) {
  var userIndex = users.findIndex(val => val.id === Number(req.params.id));
  users.splice(userIndex, 1);
  res.redirect('/users');
});

modules.exports = router;
