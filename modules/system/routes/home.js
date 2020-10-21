const routes = function(data){
	data.router.get('/', function(req, res){
		res.send("home");
	})
	return data.router;
}

module.exports = routes;