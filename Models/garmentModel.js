'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GarmentSchema = new Schema({
  img_url: {
    type: String
  },
  garment_type: {
    type: [{
      type: String,
      enum: ['top', 'bottom', 'both']
    }],
    default: ['both']
  },
  color: {
    type: String,
  }
});

module.exports = mongoose.model('Garments', GarmentSchema);
