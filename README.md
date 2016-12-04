# test-validators
Testing validators compatibility with JSON-Schema standard

## Results summary

The table shows the number of failing tests in different groups:

- spec - tests from the "official" [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite) (`format` and other optional tests are excluded)
- schemas - [tests with schemas](https://github.com/epoberezkin/ajv/tree/master/spec/tests/schemas) from different validators test-suites
- keywords - [additional tests for standard keywords](https://github.com/epoberezkin/ajv/tree/master/spec/tests/rules) used by Ajv (`format` tests are excluded)
- issues - [Ajv tests for various issues](https://github.com/epoberezkin/ajv/tree/master/spec/tests/issues), primarily $ref resolution

The table header shows the total number of tests is each group.

|validator|spec<br>(272)|schemas<br>(32)|keywords<br>(33)|issues<br>(103)|**total**<br>(440)|
|---|:-:|:-:|:-:|:-:|:-:|
|ajv|-|-|-|-|-|
|is-my-json-valid|6|-|-|13|**19**|
|jayschema|5|-|-|6|**11**|
|jjv|9|2|1|12|**24**|
|jsck|16|15|-|49|**80**|
|jsen|-|-|-|44|**44**|
|jsonschema|2|2|-|10|**14**|
|schemasaurus|18|19|2|71|**110**|
|skeemas|2|4|1|23|**30**|
|themis|12|-|4|55|**71**|
|tv4|2|1|-|11|**14**|
|z-schema|-|1|-|17|**18**|
