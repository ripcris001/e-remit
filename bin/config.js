const data = {
	server: {
		env: 'linux',
		port: 3000,
		assets: 'assets/files/',
		assets_path: '/ASSETS',
		session_secret: 'rJB7nfASntLfwEA8'
	},
	template: {
		content: {
			title: 'E-Remit',
			icon: '',
		},
		component: {
			header: '/modules/system/views/theme/header.ejs',
			layout: '/modules/system/views/theme/layout.ejs',
			sidebar: '/modules/system/views/theme/sidebar.ejs',
		},
		view:{
			header: true,
			footer: true,
			sidebar: true
		}
	},
	homepage: '/dashboard'
}

module.exports = data;