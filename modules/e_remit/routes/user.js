const routes = function(data){
	data.router.get('/list', function(req, res){
		data.template.setComponent('/modules/e_remit/views/user/list.ejs').setContent({sub:'User list'}).play(req, res);
	})
	return data.router;
}

module.exports = routes;