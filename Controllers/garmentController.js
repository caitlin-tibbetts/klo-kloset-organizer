'use strict';


var mongoose = require('mongoose'),
  Garment = mongoose.model('Garments');

exports.list_all_garments = function(req, res) {
  Garment.find({}, function(err, garment) {
    if (err)
      res.send(err);
    res.json(garment);
  });
};

exports.add_a_garment = function(req, res) {
  var new_garment = new Garment(req.body);
  new_garment.save(function(err, garment) {
    if (err)
      res.send(err);
    res.json(garment);
  });
};

exports.update_a_garment = function(req, res) {
  Garment.findOneAndUpdate({_id: req.params.garmentId}, req.body, {new: true}, function(err, garment) {
    if (err)
      res.send(err);
    res.json(garment);
  });
};


exports.delete_a_garment = function(req, res) {
  Garment.deleteOne({
    _id: req.params.garmentId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Garment successfully deleted' });
  });
};
