var express = require('express');
var login = require('./login');
var port = process.env.PORT || 3000;
express()
	.set('view engine', 'ejs')
	.use(express.static('./public'))
	.use(login.routes)
	.use(require('./spits'))
	.get('*', login.required, function(req,res){
		res.render('index',{
			user: login.safe(req.user)
		});
	})
	.listen(port);

console.log("Listening on port " + port);