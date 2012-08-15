var
	stringUtils = require('..'),
	assert = require('assert');

describe('piton-string-utils', function() {

	describe('#decamelcase()', function() {

		it('empty string returns empty string', function() {
			stringUtils.decamelcase('').should.equal('');
		});

		it('title case word is unaffected', function() {
			stringUtils.decamelcase('Hello').should.equal('Hello');
		});

		it ('title case words are unaffected', function() {
			stringUtils.decamelcase('Hello World').should.equal('Hello World');
		});

		it ('camelcase phrase is correctly converted', function() {
			stringUtils.decamelcase('helloWorld').should.equal('Hello World');
		});

		it ('delimter can be given', function() {
			stringUtils.decamelcase('helloWorld', '-').should.equal('Hello-World');
		});

		it('camelcase with upper case first charater get converted', function() {
			stringUtils.decamelcase('HelloWorld').should.equal('Hello World');
		});

		it('a single lower case words has first letter converted to uppercase', function() {
			stringUtils.decamelcase('Hello World').should.equal('Hello World');
		});

		it('numbers get spaces insert before them', function() {
			stringUtils.decamelcase('addressLine1').should.equal('Address Line 1');
		});

		it('numbers with >1 digits convert correctly', function() {
			stringUtils.decamelcase('gate1452').should.equal('Gate 1452');
		});

	});
});