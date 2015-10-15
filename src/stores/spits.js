var constants = require('../constants');


var SpitStore = module.exports = require('./store').extend({
	init: function () {
		this.bind(constants.GOT_SPITS, this.set);
		this.bind(constants.SPITTED, this.add);

	}

});