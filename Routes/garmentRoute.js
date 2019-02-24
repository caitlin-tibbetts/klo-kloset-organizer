'use strict';
module.exports = function(app) {
  var garmentList = require('../Controllers/garmentController');

  // todoList Routes
  app.route('/garments')
    .get(garmentList.list_all_garments)
    .post(garmentList.add_a_garment);


  app.route('/garments/:garmentId')
    .put(garmentList.update_a_garment)
    .delete(garmentList.delete_a_garment);
};
