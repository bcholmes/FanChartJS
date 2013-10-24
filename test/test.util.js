var assert = require('assert')
	, util = require('../lib/util');

describe('validate util',function(){

    it('should convert degrees to radians',function() {

		assert.equal(Math.PI / 2, util.toRadians(90));

	});
});