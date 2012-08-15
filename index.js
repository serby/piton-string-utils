/*!
 * Paul Serby <paul.serby@clock.co.uk>
 *
 * New BSD Licensed
 *
 * Thursday 25 June 2011
 *
 */

/**
 *
 * Takes a string in the form 'addressLine1' and converts to 'Address Line 1'
 *
 * @param {String} value The string to be converted
 */
exports.decamelcase = function(value, delimter) {
	if (!delimter) {
			delimter = ' ';
		}
	return value.substring(0, 1).toUpperCase() + value.substring(1).replace(/([^\s0-9])([A-Z0-9])/g, function($0, $1, $2) { return $1 + delimter + $2; });
};

/**
 * Takes a string in the form 'background-image' and converts to 'backgroundImage'
 */
exports.camelcase = function(value, delimter) {
	var camel = value.toLowerCase();
	return camel.replace(/[\s\-]+(.)?/g, function(match, chr) {
		return chr ? chr.toUpperCase() : '';
	});
};