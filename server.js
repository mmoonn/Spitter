var express = require('express');
var login = require('./login');
var port = process.env.PORT || 3000;
express()
	.set('view engine', 'ejs')
	.use(express.static('./public'))
	.use(login.routes)
	.get('*',function(req,res){
		res.render('index');
	})
	.listen(port);

console.log("Listening on port " + port);