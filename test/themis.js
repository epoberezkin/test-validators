'use strict';

var Themis = require('themis');

var validator = {
  validate(schema, data) {
    var v = Themis.validator(schema);
    var {valid, errors} = v(data, schema.id || '0');
    validator.errors = errors;
    return valid;
  }
};

require('./testValidator')('themis', validator);
