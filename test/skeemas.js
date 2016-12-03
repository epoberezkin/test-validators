'use strict';

var skeemas = require('skeemas')();

var validator = {
  validate(schema, data) {
    var {valid, errors} = skeemas.validate(data, schema);
    validator.errors = errors;
    return valid;
  }
};

require('./testValidator')('skeemas', validator);
