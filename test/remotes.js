'use strict';

var remotes = module.exports = {
  schemas: {
    // from JSON-Schema-Test-Suite
    'http://localhost:1234/integer.json': require('../JSON-Schema-Test-Suite/remotes/integer.json'),
    'http://localhost:1234/subSchemas.json': require('../JSON-Schema-Test-Suite/remotes/subSchemas.json'),
    'http://localhost:1234/folder/folderInteger.json': require('../JSON-Schema-Test-Suite/remotes/folder/folderInteger.json'),

    // from Ajv
    'http://localhost:1234/name.json': require('../ajv/spec/remotes/name.json'),
    'http://localhost:1234/bar.json': require('../ajv/spec/remotes/bar.json'),
    'http://localhost:1234/foo.json': require('../ajv/spec/remotes/foo.json'),
    'http://localhost:1234/buu.json': require('../ajv/spec/remotes/buu.json'),
    'http://localhost:1234/tree.json': require('../ajv/spec/remotes/tree.json'),
    'http://localhost:1234/node.json': require('../ajv/spec/remotes/node.json'),
    'http://localhost:1234/first.json': require('../ajv/spec/remotes/first.json'),
    'http://localhost:1234/second.json': require('../ajv/spec/remotes/second.json'),
    'http://localhost:1234/scope_change.json': require('../ajv/spec/remotes/scope_change.json')
  },
  meta: {
    'http://json-schema.org/draft-04/schema': require('../ajv/lib/refs/json-schema-draft-04.json')
  }
};
