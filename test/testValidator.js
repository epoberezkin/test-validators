'use strict';

var {schemas, meta} = require('./remotes');
var jsonSchemaTest = require('json-schema-test');
var SUITES = {
  spec: '../JSON-Schema-Test-Suite/tests/draft4/*.json',
  schemas: '../ajv/spec/tests/schemas/*.json',
  keywords: '../ajv/spec/tests/rules/*.json',
  issues: '../ajv/spec/tests/issues/*.json'
};
var group = process.env.TEST_GROUP;
var suites = group ? {[group]: SUITES[group]} : SUITES;

module.exports = (description, validator) => {
  var skip = ['rules/format'];
  if (description == 'themis')
    skip.push('issues/27_recursive_reference');

  if (validator.addSchema) {
    addRemotes(validator, schemas);
    if (description != 'ajv') addRemotes(validator, meta);
  }

  jsonSchemaTest(validator, {
    description,
    suites,
    skip,
    cwd: __dirname
  });
};

function addRemotes(validator, refs) {
  for (var id in refs) validator.addSchema(refs[id], id);
}
