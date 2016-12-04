'use strict';

var tv4 = require('tv4').freshApi();

var validator = {
  validate(schema, data) {
    var {valid, errors, missing} = tv4.validateMultiple(data, schema);
    if (missing && missing.length) {
      valid = false;
      errors = (errors || []).concat(missing.map(id => ({missingSchema: id})));
    }
    validator.errors = errors;
    return valid;
  },
  addSchema(schema, id) {
    tv4.addSchema(id, schema);
  }
};

require('./testValidator')('tv4', validator);
