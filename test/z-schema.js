'use strict';

var ZSchema = require('z-schema');
var z = new ZSchema();

var validator = {
  validate(schema, data) {
    z.validateSchema(schema);
    var valid = z.validate(data, schema);
    validator.errors = valid ? null : z.getLastErrors();
    return valid;
  },
  addSchema(schema, id) {
    z.setRemoteReference(id, schema);
  }
};

require('./testValidator')('z-schema', validator);
