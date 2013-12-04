var fanChart = require('./fanChart');
var tree = require('./familyTree');

var family = tree.familyTree({ 
	'name': 'John Doe',
	'gender': 'M'
});
family.addParent({
	'name': 'Joseph Doe',
	'gender': 'M'
});	
family.addParent({
	'name': 'Jane Doe',
	'gender': 'F'
});	
fanChart.writeChart('/tmp/fanChart.svg', family);