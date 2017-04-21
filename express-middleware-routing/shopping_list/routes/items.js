const express = require('express');
const router = express.Router();

var items = ['apples', 'grapes', 'tissue'];
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

// router.post('/', function(req, res, next) {
//
// });
//
// router.patch('/:id/edit', function(req, res, next) {
//
// });
//
// router.delete('/:id', function(req, res, next) {
//
// });

module.exports = router;
