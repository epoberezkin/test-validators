'use strict';

var Jsonschema = require('jsonschema').Validator;
var jsonschema = new Jsonschema;

var validator = {
  validate(schema, data) {
    var {valid, errors} = jsonschema.validate(data, schema);
    validator.errors = errors;
    return valid;
  },
  addSchema(schema, id) {
    jsonschema.addSchema(schema, id);
  }
};

require('./testValidator')('jsonschema', validator);
