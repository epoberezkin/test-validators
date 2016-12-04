'use strict';

var jsen = require('jsen');
var schemas = {};

var validator = {
  validate(schema, data) {
    var v = jsen(schema, {schemas});
    var valid = v(data);
    validator.errors = v.errors;
    return valid;
  },
  addSchema(schema, id) {
    schemas[id] = schema;
  }
};

require('./testValidator')('jsen', validator);
