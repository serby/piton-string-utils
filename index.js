/*!
 * Paul Serby <paul.serby@clock.co.uk>
 *
 * New BSD Licensed
 *
 * Thursday 25 June 2011
 *
 */
module.exports = {
	decamelcase: function(value) {
		return value.substring(0, 1).toUpperCase() + value.substring(1).replace(/([^\s0-9])([A-Z0-9])/g, function($0, $1, $2) { return $1 + " " + $2; });
	}
};
