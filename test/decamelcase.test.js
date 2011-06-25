var
	stringUtils = require('../../piton-string-utils'),
	assert = require('assert');

module.exports = {
	'empty string returns empty string': function() {
		assert.strictEqual('', stringUtils.decamelcase(''));
	},
	'title case word is unaffected': function() {
		assert.strictEqual('Hello', stringUtils.decamelcase('Hello'));
	},
	'title case words are unaffected': function() {
		assert.strictEqual('Hello World', stringUtils.decamelcase('Hello World'));
	},
	'camelcase phrase is correctly converted': function() {
		assert.strictEqual('Hello World', stringUtils.decamelcase('helloWorld'));
	},
	'camelcase with upper case first charater get converted': function() {
		assert.strictEqual('Hello World', stringUtils.decamelcase('HelloWorld'));
	},
	'a single lower case words has first letter converted to uppercase': function() {
		assert.strictEqual('Hello World', stringUtils.decamelcase('Hello World'));
	},
	'numbers get spaces insert before them': function() {
		assert.strictEqual('Address Line 1', stringUtils.decamelcase('addressLine1'));
	},
	'numbers with >1 digits convert correctly': function() {
		assert.strictEqual('Gate 1452', stringUtils.decamelcase('gate1452'));
	}
};
