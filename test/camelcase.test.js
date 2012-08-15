var stringUtils = require('..')
	;

describe('piton-string-utils', function() {

	describe('#camelcase()', function() {

		it('empty string returns empty string', function() {
			stringUtils.camelcase('').should.eql('');
		});

		it('single words should be entirely lowercase', function() {
			stringUtils.camelcase('HELLO').should.eql('hello');
		});

		it ('dashes are removed and first letters uppercased', function() {
			stringUtils.camelcase('Hello-World').should.eql('helloWorld');
		});

		it ('spaces are removed and first letters uppercased', function() {
			stringUtils.camelcase('Hello World').should.eql('helloWorld');
		});

	});
});