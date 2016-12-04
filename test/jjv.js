'use strict';

var jjv = require('jjv')();

var validator = {
  validate(schema, data) {
    var result = jjv.validate(schema, data);
    var valid = !result;
    validator.errors = valid ? null : [result];
    return valid;
  },
  addSchema(schema, id) {
    jjv.addSchema(id, schema);
  }
};

require('./testValidator')('jjv', validator);
