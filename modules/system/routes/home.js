const routes = function(data){
	data.router.get('/', function(req, res){
		data.template.setComponent('/modules/e_remit/views/dashboard.ejs').play(req, res);
	})
	return data.router;
}

module.exports = routes;