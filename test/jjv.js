'use strict';

var jjv = require('jjv')();

var validator = {
  validate(schema, data) {
    var errors = jjv.validate(schema, data);
    var valid = !(errors && errors.length);
    validator.errors = valid ? null : errors;
    return valid;
  }
};

require('./testValidator')('jjv', validator);

