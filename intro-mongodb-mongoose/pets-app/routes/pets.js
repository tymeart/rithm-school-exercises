const express = require('express');
const router = express.Router({mergeParams: true});
const db = require('../models');

router.get('/', function(req, res, next) {
  db.Pet.find().then(function(pets) {
    res.render('index', {pets});
  });
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.get('/:id', function(req, res, next) {
  db.Pet.findById(req.params.id).then(function(pet) {
    res.render('show', {pet});
  });
});

router.get('/:id/edit', function(req, res, next) {
  db.Pet.findById(req.params.id).then(function(pet) {
    res.render('edit', {pet});
  });
});

router.post('/', function(req, res, next) {
  db.Pet.create(req.body).then(function(pet) {
    res.redirect('/users');
  });
});

router.patch('/:id', function(req, res, next) {
  db.Pet.findByIdAndUpdate(req.params.id, req.body).then(function(pet) {
    res.redirect('/users');
  });
});

router.delete('/:id', function(req, res, next) {
  db.Pet.findByIdAndRemove(req.params.id).then(function(pet) {
    res.redirect('/users');
  });
});

module.exports = router;
