const routes = function(data){
	data.router.get('/', function(req, res){
		data.template.play(req, res);
	})
	return data.router;
}

module.exports = routes;