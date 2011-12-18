var
	stringUtils = require('../../piton-string-utils'),
	assert = require('assert');

describe('piton-string-utils', function() {

	describe('#decamelcase()', function() {

		it('empty string returns empty string', function() {
			''.decamelcase().should.equal('');
		});

		it('title case word is unaffected', function() {
			'Hello'.decamelcase().should.equal('Hello');
		});

		it ('title case words are unaffected', function() {
			'Hello World'.decamelcase().should.equal('Hello World');
		});

		it ('camelcase phrase is correctly converted', function() {
			'helloWorld'.decamelcase().should.equal('Hello World');
		});

		it ('delimter can be given', function() {
			'helloWorld'.decamelcase('-').should.equal('Hello-World');
		});

		it('camelcase with upper case first charater get converted', function() {
			'HelloWorld'.decamelcase().should.equal('Hello World');
		});

		it('a single lower case words has first letter converted to uppercase', function() {
			'Hello World'.decamelcase().should.equal('Hello World');
		});

		it('numbers get spaces insert before them', function() {
			'addressLine1'.decamelcase().should.equal('Address Line 1');
		});

		it('numbers with >1 digits convert correctly', function() {
			'gate1452'.decamelcase().should.equal('Gate 1452');
		});

	});
});