'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ItmObjectSchema = new Schema({
        name: {
        type: String
    },
    displayName: {
        type: String
    },
    description: {
        type: String
    },
    status: {
      type: String
    }
});

module.exports = mongoose.model('ItmObjects', ItmObjectSchema);