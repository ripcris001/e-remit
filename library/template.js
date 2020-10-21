'use strict';
module.exports = function(a){
	
	// console.log(getAllMenu());
	return {
		header:a.dir+'/views/header.ejs', // set default header
		showHeader:true,
		footer:a.dir+'/views/footer.ejs',  // set default footer
		layout:a.dir+'/views/layout.ejs', // set default layout
		sidebar:a.dir+'/views/sidebar.ejs', // set default sidebar
		slideSidebar:false,
		title:'',
		establishment:'',
		icon:'',
		data:{},
		menuHtml:'',
		collections:{},
		set: function(req,res,f){
			// set route frontend template

			// res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
			// res.setHeader('Cache-Control', 'public, max-age=86400000');
			if(!f && !global.__.file_status(f)) {
				res.end('Template Not Found');
			}
			if(this.title) {
				a.title = this.title;
			} else if(!a.title) {
				a.title = '';
			}
			// console.log(global.__.file_status(this.header));
			// check if header exists
			if(this.header && !global.__.file_status(this.header)) {
				this.header = a.dir+'/views/header.ejs';
			}
			// check if footer exists
			if(this.footer && !global.__.file_status(this.footer)) {
				this.footer = a.dir+'/views/footer.ejs';
			}
			// check if layout exists
			if(this.layout && !global.__.file_status(this.layout)) {
				this.layout = a.dir+'/views/layout.ejs';
			}
			// check if sidebar exists
			if(this.sidebar && !global.__.file_status(this.sidebar)) {
				this.sidebar = a.dir+'/views/sidebar.ejs';
			}
			// option data for ejs file
			var options = {
				menuHtml:this.menuHtml,
				headNav:'',
				pageClass:a.class,
				data:this.data,
				access:true,
				showHeader:this.showHeader,
				slideSidebar:this.slideSidebar,
				collections:this.collections,
				title: a.title,
				icon:this.icon,
				content:f,
				header:this.header,
				footer:this.footer,
				sidebar:this.sidebar,
				symbol:a.symbol
			}
			// use the layout file as template
			res.render(this.layout, options);
		}
	}
}