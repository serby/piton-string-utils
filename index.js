/**
 * Paul Serby <paul.serby@clock.co.uk>
 *
 * New BSD Licensed
 *
 * Thursday 25 June 2011
 *
 */

/**
 * Takes a string in the form 'addressLine1' and converts to 'Address Line 1'
 */
if (!String.prototype.decamelcase) {
	String.prototype.decamelcase = function(delimter) {
		if (!delimter) {
			delimter = ' ';
		}
		return this.substring(0, 1).toUpperCase() + this.substring(1).replace(/([^\s0-9])([A-Z0-9])/g, function($0, $1, $2) { return $1 + delimter + $2; });
	};
}

/**
 * Takes a string in the form 'background-image' and converts to 'backgroundImage'
 */
if (!String.prototype.camelcase) {
	String.prototype.camelcase = function() {
		var camel = this.toLowerCase();
		return camel.replace(/[\s\-]+(.)?/g, function(match, chr) {
			return chr ? chr.toUpperCase() : '';
		});
	};
}