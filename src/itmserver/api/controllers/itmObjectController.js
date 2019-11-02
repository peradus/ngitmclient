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
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


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

