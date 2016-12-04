'use strict';

var Themis = require('themis');
// var schemasArray = [];

var validator = {
  validate(schema, data) {
    // var schemas = schemasArray.concat([schema]);
    var v = Themis.validator(schema/*s*/);
    var {valid, errors} = v(data, schema.id || '0');
    validator.errors = errors;
    return valid;
  },
  // addSchema(schema, id) {
  //   if (schema.id) schemasArray.push(schema);
  // }
};

require('./testValidator')('themis', validator);
