var assert = require('assert')
	, arc = require('../arc');

describe('validate arc',function(){

    it('should bisect',function() {
    	var arc1 = arc.arc(0, 90);
    	assert.equal(0, arc1.start);
    	
    	var level2 = arc1.bisect();
    	assert.equal(2, level2.length);
    	assert.equal(0, level2[0].start);
    	assert.equal(45, level2[0].end);
    	assert.equal(45, level2[1].start);
    	assert.equal(90, level2[1].end);
    	
    	var level3 = level2[0].bisect();
    	assert.equal(22.5, level3[0].end);
	});
	
    it('should create start point',function() {
    	var arc1 = arc.arc(-45, 0);
    	assert.equal(100, arc1.startPoint(100 * Math.sqrt(2)).x);
    });
});
