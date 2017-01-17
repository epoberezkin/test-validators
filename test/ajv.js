'use strict';

var Ajv = require('ajv');

require('./testValidator')('ajv', new Ajv({ extendRefs: 'ignore' }));
