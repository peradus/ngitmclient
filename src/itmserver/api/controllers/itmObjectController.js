'use strict';


var mongoose = require('mongoose'),
    ItmObject = mongoose.model('ItmObjects');

exports.list_all_itmobjects = function(req, res) {
    ItmObject.find({}, function(err, itmObject) {
    if (err)
      res.send(err);
    res.json(itmObject);
  });
};

exports.create_a_itmobject = function(req, res) {
  var new_itmObject = new ItmObject(req.body);
  new_itmObject.save(function(err, itmObject) {
    if (err)
      res.send(err);
    res.json(itmObject);
  });
};


exports.read_a_itmobject = function(req, res) {
    ItmObject.findById(req.params.ItmObjectId, function(err, itmObject) {
    if (err)
      res.send(err);
    res.json(itmObject);
  });
};


exports.update_a_itmobject = function(req, res) {
    ItmObject.findOneAndUpdate({_id: req.params.ItmObjectId}, req.body, {new: true}, function(err, itmObject) {
    if (err)
      res.send(err);
    res.json(itmObject);
  });
};


exports.delete_a_itmobject = function(req, res) {
    ItmObject.remove({
    _id: req.params.ItmObjectId
  }, function(err, itmObject) {
    if (err)
      res.send(err);
    res.json({ message: 'ItmObject successfully deleted' });
  });
};

