'use strict';
module.exports = function(app) {
  var itmObjectList = require('../controllers/itmObjectController');

  // todoList Routes
  app.route('/itmobjects')
    .get(itmObjectList.list_all_itmobjects)
    .post(itmObjectList.create_a_itmobject);


  app.route('/itmobjects/:ItmObjectId')
    .get(itmObjectList.read_a_itmobject)
    .put(itmObjectList.update_a_itmobject)
    .delete(itmObjectList.delete_a_itmobject);
};