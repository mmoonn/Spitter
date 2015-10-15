var router = module.exports = require('express').Router();
var login = require('./login');

var db = new (require('locallydb'))('./.data');
var spits = db.collection('spits');

router.route('/api/spits')
	.all(login.required)
	.get(function (req,res){
		res.json(spits.toArray());
	})
	.post(function (req,res){
		var spit = req.body;
		spit.userId = res.user.cid;

		//TO BE REMOVED
		spit.username = req.user.username;
		spit.fullname = req.user.fullname;
		spit.email = req.user.email;

		var id = spits.insert(spit);
		res.json(spits.get(id));
	})