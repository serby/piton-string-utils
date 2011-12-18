var
	stringUtils = require('../../piton-string-utils'),
	assert = require('assert');

describe('piton-string-utils', function() {

	describe('#camelcase()', function() {

		it('empty string returns empty string', function() {
			''.camelcase().should.equal('');
		});

		it('single words should be entirly lowercase', function() {
			'HELLO'.camelcase().should.equal('hello');
		});

		it ('dashes are removed and first letters uppercased', function() {
			'Hello-World'.camelcase().should.equal('helloWorld');
		});

		it ('spaces are removed and first letters uppercased', function() {
			'Hello World'.camelcase().should.equal('helloWorld');
		});

	});
});