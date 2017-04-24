const express = require('express');
const router = express.Router();

var items = [];
var id = 1;

router.get('/', function(req, res, next) {
  res.render('index', {items});
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.get('/:id', function(req, res, next) {
  res.send(req.params.id);
});

router.get('/:id/edit', function(req, res, next) {
  var item = items.find(val => val.id === Number(req.params.id));
  res.render('edit', {item});
});

router.post('/', function(req, res, next) {
  items.push({
    name: req.body.name,
    id
  });
  id++;
  res.redirect('/');
});

router.patch('/:id/edit', function(req, res, next) {
  var item = items.find(val => val.id === Number(req.params.id));
  item.name = req.body.name;
  res.redirect('/');
});

router.delete('/:id', function(req, res, next) {
  var itemIndex = items.findIndex(val => val.id === Number(req.params.id));
  items.splice(itemIndex, 1);
  res.redirect('/');
});

module.exports = router;
