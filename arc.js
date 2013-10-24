
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
		}
	};
};

exports.arc = function(start, end) {
	return wrap(start, end);
}