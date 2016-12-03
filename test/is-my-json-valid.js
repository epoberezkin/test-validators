'use strict';

var imjv = require('is-my-json-valid');

var validator = {
  validate(schema, data) {
    var v = imjv(schema);
    var valid = v(data);
    validator.errors = v.errors;
    return valid;
  }
};

require('./testValidator')('is-my-json-valid', validator);
