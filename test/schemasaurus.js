'use strict';

var ss = require('schemasaurus')

var validator = {
  validate(schema, data) {
    var v = ss.newValidator(schema);
    var {valid, errors} = v(data);
    validator.errors = errors;
    return valid;
  }
};

require('./testValidator')('schemasaurus', validator);
