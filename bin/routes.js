const data = {
	list:[
		{path: "/", route: '/modules/e_remit/routes/home'},
		{path: "/user", route: '/modules/e_remit/routes/user'},
		{path: "/api/user", route: '/modules/e_remit/routes/api/user'}
	],
	url: [
		{path: "/", backend: false, require_login: false, maintenance: false, allowUserMaintenance: [], role_view: [], role_add:[], role_edit:[], role_delte:[]},
		{path: "/dashboard", backend: false, require_login: false, maintenance: false, allowUserMaintenance: [], role_view: [], role_add:[], role_edit:[], role_delte:[]},
		{path: "/login", backend: false, require_login: false, maintenance: false, allowUserMaintenance: [], role_view: [], role_add:[], role_edit:[], role_delte:[]},
		{path: "/user", backend: false, require_login: false, maintenance: false, allowUserMaintenance: [], role_view: [], role_add:[], role_edit:[], role_delte:[]},
		{path: "/user/list", require_login: false, backend: false, maintenance: false, allowUserMaintenance: [], role_view: [], role_add:[], role_edit:[], role_delte:[]}
	]
}

module.exports = data;