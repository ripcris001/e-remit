const routes = function(data){
	data.router.get('/login', function(req, res){
		res.send('api/login');
	})
	data.router.get('/logout', function(req, res){
		res.send('api/logout');
	})
	return data.router;
}

module.exports = routes;