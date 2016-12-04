'use strict';

var JaySchema = require('jayschema');
var jayschema = new JaySchema;

var validator = {
  validate(schema, data) {
    var errors = jayschema.validate(data, schema);
    var valid = !(errors && errors.length);
    validator.errors = errors;
    return valid;
  },
  addSchema(schema, id) {
    jayschema.register(schema, id);
  }
};

require('./testValidator')('jayschema', validator);
