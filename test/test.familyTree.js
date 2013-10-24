var assert = require('assert');
var treeFactory = require('../familyTree');

describe('validate parents',function(){

    it('should create display name',function() {
    	var trunk = treeFactory.familyTree({ 'name': 'Bruno Schmidt' });
    	
    	assert.equal('Bruno Schmidt', trunk.displayName());
	});
    it('should display default display name',function() {
    	var trunk = treeFactory.familyTree({  });
    	
    	assert.equal('Unnamed Person', trunk.displayName());
	});

    it('should add parent',function() {
    	var trunk = treeFactory.familyTree({ 'name': 'Bruno Schmidt' });
    	var parent = trunk.addParent({'name': 'Leopold Schmidt' });
    	
    	assert.equal('Leopold Schmidt', parent.displayName());

    	parent = trunk.parent(0);
    	
    	assert.equal('Leopold Schmidt', parent.displayName());
	});
});
