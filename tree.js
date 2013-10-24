var fanChart = require('./fanChart');
var tree = require('./familyTree');

var family = tree.familyTree({ 
	'name': 'John Doe',
	'gender': 'M'
});	
fanChart.writeChart('/tmp/fanChart.svg', family);