const express = require('express');
const router = express.Router();

var users = [];
var id = 1;

router.get('/users', function(req, res, next) {
  res.render('index', {users});
});

router.get('/users/new', function(req, res, next) {
  res.render('new');
});

router.get('/users/:id', function(req, res, next) {
  var user = users.find(val => val.id === Number(req.params.id));
  res.render('show', {user});
});

router.get('/users/:id/edit', function(req, res, next) {
  var user = users.find(val => val.id === Number(req.params.id));
  res.render('edit', {user});
});

router.post('/users', function(req, res, next) {
  users.push({
    name: req.body.name,
    id: ++id
  });
  res.redirect('/users');
});

router.patch('/users/:id', function(req, res, next) {
  var user = users.find(val => val.id === Number(req.params.id);
  user.name = req.body.name;
  res.redirect('/users');
  });
});

router.delete('/users/:id', function(req, res, next) {
  var userIndex = users.findIndex(val => val.id === Number(req.params.id));
  users.splice(userIndex, 1);
  res.redirect('/users');
});

modules.exports = router;
