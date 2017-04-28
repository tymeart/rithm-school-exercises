const express = require('express');
const router = express.Router({mergeParams: true});
const db = require('../models');

// route: /owners/:owner_id/pets
router.get('/', function(req, res, next) {
  db.Owner.findById(req.params.owner_id)
    .populate('pets')
    .exec()
    .then(function(owner) {
      res.render('pets/index', {owner});
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

// route: /owners/:owner_id/pets
router.post('/', function(req, res, next) {
  var fido = new Pet(req.body);
  fido.owner = req.params.owner_id;
  fido.save().then(function(pet) {
    db.Owner.findById(req.params.owner_id).then(function(owner) {
      owner.pets.push(fido);
      owner.save().then(function(owner) {
        res.redirect(`/owners/${owner.id}/pets`);
      });
    });
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
