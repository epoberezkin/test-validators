'use strict';

var jsen = require('jsen');

var validator = {
  validate(schema, data) {
    var v = jsen(schema);
    var valid = v(data);
    validator.errors = v.errors;
    return valid;
  }
};

require('./testValidator')('jsen', validator);
