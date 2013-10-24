var fs = require('fs');
var arcFactory = require('./arc');

var textBox = function(node, centre) {
	return '<text x="' + centre.x + '" y = "' + centre.y + 
		'" fill = "black" stroke = "none" font-family="sans-serif" font-size="12px" stroke-width="0" style="text-anchor: middle;">' + 
		node.displayName() + '</text>';
}

var translate = function(start, translation) {
	return {
		'x': (start.x + translation.x),
		'y': (start.y + translation.y)
	};
}

var renderPoint = function(point) {
	return '' + point.x + ' ' + point.y;
}

var drawArc = function(arc, node, centre) {
	return '<path d="M ' + renderPoint(translate(arc.startPoint(100), centre))
		+ ' A 100 100 0 ' +  (arc.isLarge() ? '1' : '0') + ' 0 ' + renderPoint(translate(arc.endPoint(100), centre))
		+ '" fill="none" stroke="#aaaaaa" stroke-width="6" />';
}

exports.writeChart = function(fileName, tree) {
	var arc = arcFactory.arc(-120, 120);
	var centre = { 'x': 300, 'y': 200 };

	var stream = fs.createWriteStream(fileName);
	stream.once('open', function(fd) {
		stream.write('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n');
		stream.write('<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox = "0 0 500 600" version = "1.1">\n');
		stream.write('\t' + drawArc(arc, 0, centre) + '\n');
		stream.write('\t' + textBox(tree, centre) + '\n');
		stream.write('</svg>');
		stream.end();
	});
}