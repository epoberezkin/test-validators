# test-validators
Testing validators compatibility with JSON-Schema standard

## Results summary

The table shows the number of failing tests in different groups:

- spec - tests from the "official" [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite) (`format` and other optional tests are excluded)
- schemas - [tests with schemas](https://github.com/epoberezkin/ajv/tree/master/spec/tests/schemas) from different validators test-suites
- keywords - [additional tests for standard keywords](https://github.com/epoberezkin/ajv/tree/master/spec/tests/rules) used by Ajv (`format` tests are excluded)
- issues - [Ajv tests for various issues](https://github.com/epoberezkin/ajv/tree/master/spec/tests/issues), primarily $ref resolution

The table header shows the total number of tests is each group.

|validator|spec<br>(272)|schemas<br>(32)|keywords<br>(33)|issues<br>(103)|**total**<br>(443)|
|---|:-:|:-:|:-:|:-:|:-:|
|[ajv](https://github.com/epoberezkin/ajv)|-|-|-|-|-|
|[djv](https://github.com/korzio/djv)|4|9|2|49|**64**|
|[is-my-json-valid](https://github.com/mafintosh/is-my-json-valid)|7|-|-|13|**20**|
|[jayschema](https://github.com/natesilva/jayschema)|5|-|-|6|**11**|
|[jjv](https://github.com/acornejo/jjv)|9|2|1|12|**24**|
|[jsck](https://github.com/pandastrike/jsck)|17|15|-|49|**81**|
|[jsen](https://github.com/bugventure/jsen)|-|-|-|44|**44**|
|[jsonschema](https://github.com/tdegrunt/jsonschema)|2|2|-|10|**14**|
|[schemasaurus](https://github.com/AlexeyGrishin/schemasaurus)|19|19|2|71|**111**|
|[skeemas](https://github.com/Prestaul/skeemas)|2|4|1|23|**30**|
|[themis](https://github.com/playlyfe/themis)|13|-|4|55|**72**|
|[tv4](https://github.com/geraintluff/tv4)|2|1|-|11|**14**|
|[z-schema](https://github.com/zaggino/z-schema)|-|1|-|17|**18**|


## Most failed tests related to $ref

`x` marks the validators that failed the test.

|<sub>Test file</sub>|<sub>[imjv](https://github.com/mafintosh/is-my-json-valid)</sub><sup>*</sup>|<sub>[jayschema](https://github.com/natesilva/jayschema)</sub>|<sub>[jjv](https://github.com/acornejo/jjv)</sub>|<sub>[jsck](https://github.com/pandastrike/jsck)</sub>|<sub>[jsen](https://github.com/bugventure/jsen)</sub>|<sub>[jsonschema](https://github.com/tdegrunt/jsonschema)</sub>|<sub>[ss](https://github.com/AlexeyGrishin/schemasaurus)</sub><sup>**</sup>|<sub>[skeemas](https://github.com/Prestaul/skeemas)</sub>|<sub>[themis](https://github.com/playlyfe/themis)</sub>|<sub>[tv4](https://github.com/geraintluff/tv4)</sub>|<sub>[z-schema](https://github.com/zaggino/z-schema)</sub>|
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|[base URI change](https://github.com/epoberezkin/ajv/blob/master/spec/tests/issues/62_resolution_scope_change.json)|x|x|x|x|x|x|x|x|x|x|x|
|[mutually recursive ref](https://github.com/epoberezkin/ajv/blob/master/spec/tests/issues/5_recursive_references.json)|x||x|x|x||x|x|x||x|
|[ref in remote ref with id](https://github.com/epoberezkin/ajv/blob/master/spec/tests/issues/14_ref_in_remote_ref_with_id.json)|x||x|x|x||x|x|x|||
|[id in ref without root id](https://github.com/epoberezkin/ajv/blob/master/spec/tests/issues/1_ids_in_refs.json)|||x|x||x|x|x||x|x|
|[root ref in remote ref](https://github.com/epoberezkin/ajv/blob/master/spec/tests/issues/13_root_ref_in_ref_in_remote_ref.json)|x||x|x|x||x|x|x|||
|[recursive refs](https://github.com/epoberezkin/ajv/blob/master/spec/tests/issues/27_recursive_reference.json)|||x|x|x||x|x||x|x|
|[swagger schema](https://github.com/epoberezkin/ajv/blob/master/spec/tests/issues/70_swagger_schema.json)||x||x|x|x|x||x|x||
|[spec/refRemote](https://github.com/json-schema-org/JSON-Schema-Test-Suite/blob/master/tests/draft4/refRemote.json)|x|x|x|x|||x||x|||
|[ref when sibling property has id](https://github.com/epoberezkin/ajv/blob/master/spec/tests/issues/170_ref_and_id_in_sibling.json)||||x|||x||x|x|x|
|[recursive hash in remote hash](https://github.com/epoberezkin/ajv/blob/master/spec/tests/issues/70_1_recursive_hash_ref_in_remote_ref.json)|x|||x|x||x||x|||
|[spec/ref](https://github.com/json-schema-org/JSON-Schema-Test-Suite/blob/master/tests/draft4/ref.json)|x|x|x||||x||x|||

<sup>*</sup> [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid)

<sup>**</sup> [schemasaurus](https://github.com/AlexeyGrishin/schemasaurus)


## Running tests

Tests require node v6 to run.

```bash
npm install
git submodule update --init

# all tests with all validators
npm test

# one group of tests for all validators
# groups: spec, schemas, keywords, issues
npm test spec

# all tests for one validator
mocha test/ajv
```
