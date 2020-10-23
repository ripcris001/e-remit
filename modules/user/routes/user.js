const routeList = function(data){
	console.log(data.template);
	data.router.get('/user', function(req, res){
		data.template.setComponent('/test.ejs');
		data.template.play(req, res);
	})
	data.router.get('/test', function(req, res){
		res.send("test");
	})
	return data.router;
}
module.exports = routeList;