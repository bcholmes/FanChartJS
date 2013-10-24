var util = require('./lib/util');

var createPoint function(degrees, radius) {
	return { 
		'x': Math.sin(util.toRadians(degrees)) * radius,
		'y': Math.cos(util.toRadians(degrees)) * radius
	};
};

var wrap = function(start, end) {
	return {
		start: start,
		end: end,
		bisect: function() {
			var length = (end - start) / 2;
			return [
				wrap(start, start + length),
				wrap(start + length, end)
			];
		},
		startPoint: function(radius) {
			return createPoint(start, radius);
		},
		endPoint: function(radius) {
			return createPoint(end, radius);
		},
		isLarge: function() {
			return end - start > 180;
		} 
	};
};

exports.arc = function(start, end) {
	return wrap(start, end);
}