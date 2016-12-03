'use strict';

require('coffee-script/register');

var JSCK = require('jsck');
var jsck = new JSCK.draft4();

var validator = {
  validate(schema, data) {
    var v = new JSCK.draft4(schema);
    var {valid, errors} = v.validate(data);
    validator.errors = errors;
    return valid;
  }
};

require('./testValidator')('jsck', validator);
