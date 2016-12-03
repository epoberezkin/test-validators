'use strict';

module.exports = (description, validator) => {
  require('json-schema-test')(validator, {
    description,
    suites: {
      schemas: '../ajv/spec/tests/schemas/*.json',
      keywords: '../ajv/spec/tests/rules/*.json'
    },
    skip: ['rules/format'],
    cwd: __dirname
  });
};
