'use strict';

var djv = require('djv')();

var validator = {
  validate(schema, data) {
    var validate = djv.addSchema('test', schema).fn;
    var result = validate(data);
    var valid = result === undefined;
    validator.errors = valid ? null : [result];
    return valid;
  },
  addSchema(schema, id) {
    try { djv.addSchema(id, schema); }
    catch(e) { console.log('Error adding schema', id); }
  }
};

require('./testValidator')('djv', validator);
