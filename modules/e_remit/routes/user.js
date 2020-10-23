const routes = function(data){
	console.log(data.template);
	data.router.get('/user', function(req, res){
		data.template.setComponent('/modules/e_remit/views/user/list.ejs').setContent({sub:'User list'}).play(req, res);
	})
	return data.router;
}

module.exports = routes;