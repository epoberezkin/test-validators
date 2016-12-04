'use strict';

var imjv = require('is-my-json-valid');
var schemas = {};

var validator = {
  validate(schema, data) {
    var v = imjv(schema, {schemas});
    var valid = v(data);
    validator.errors = v.errors;
    return valid;
  },
  addSchema(schema, id) {
    schemas[id] = schema;
  }
};

require('./testValidator')('is-my-json-valid', validator);
