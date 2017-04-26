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
  return new Promise((resolve, reject) => {
    var item = items.find(val => val.id === Number(req.params.id));
    resolve(item);
  }).then(item => {
    res.render('show', {item});
  })
});

router.get('/:id/edit', function(req, res, next) {
  return new Promise((resolve, reject) => {
    var item = items.find(val => val.id === Number(req.params.id));
    resolve(item);
  }).then(item => {
    res.render('edit', {item});
  });
});

router.post('/', function(req, res, next) {
  items.push({
    name: req.body.addedItem,
    id
  });
  id++;
  res.redirect('/');
});

router.patch('/:id/edit', function(req, res, next) {
  return new Promise((resolve, reject) => {
    var item = items.find(val => val.id === Number(req.params.id));
    item.name = req.body.newItem;
    resolve(item);
  }).then(() => {
    res.redirect('/');
  });
});

router.delete('/:id', function(req, res, next) {
  return new Promise((resolve, reject) => {
    var itemIndex = items.findIndex(val => val.id === Number(req.params.id));
    items.splice(itemIndex, 1);
    resolve(itemIndex);
  }).then(() => {
    res.redirect('/');
  });
});

module.exports = router;
