'use strict';
const fs = require('fs');
module.exports = function(input){
	return {
		dir: input.dir,
		assets: input.assets,
		view:{
			header: input && input.template && input.template.view ? input.template.view.header : true,
			footer: input && input.template && input.template.view ? input.template.view.footer : true,
			sidebar: input && input.template && input.template.view ? input.template.view.sidebar : true
		},
		content:{
			sub: '?',
			title: input && input.template && input.template.content && input.template.content.title ? input.template.content.title : '?',
			icon: input && input.template && input.template.content && input.template.content.icon ? input.template.content.icon : '?',
		},
		template:{
			error:{
				err404: input.dir+'/modules/system/views/error/404.ejs',
				err403: input.dir+'/modules/system/views/error/403.ejs'
			},
			header:input && input.template && input.template.component && input.template.component.header ? input.dir+input.template.component.header : input.dir+'/modules/system/views/default/header.ejs',
			footer:input && input.template && input.template.component && input.template.component.footer ? input.dir+input.template.component.footer : input.dir+'/modules/system/views/default/footer.ejs', 
			layout:input && input.template && input.template.component && input.template.component.layout ? input.dir+input.template.component.layout : input.dir+'/modules/system/views/default/layout.ejs',
			sidebar:input && input.template && input.template.component && input.template.component.sidebar ? input.dir+input.template.component.sidebar : input.dir+'/modules/system/views/default/sidebar.ejs'
		},
		contentComponent: '',
		data:{},
		checkFile:function(path){
			try{
				const verifyPath = fs.existsSync(`${path}`);
				if(path && verifyPath){
					return true;
				}else{
					return false;
				}
			}catch(err){
				console.log(err.message);
				return false;
			}
		},
		set: function(data){
			const checkData = data ? Object.keys(data) : {};
			if(checkData && checkData.length){
				if(data.component && !this.checkFile(data.component)) {
					res.end('Template Not Found');
				}
				if(data.title) {
					this.content.title = data.title;
				}
				if(data.component) {
					this.component = data.component;
				}
			}else{
				console.log('no set data');
			}
			return this;
		},
		setTemplate: function(data){
			const me = this;
			const checkData = data ? Object.keys(data) : {};
			if(checkData && checkData.length){
				const count = checkData.length;
				for(let a = 0; a < count; a++){
					const index = checkData[a];
					const loopdata = checkData[index];
					if(me.template[index]){
						if(this.checkFile(data.component)){
							me.template[index] = me.dir + loopdata;
						}else{
							me.template[index] = me.template.error.err404;
						}
					}else{
						console.log(`Template ${index} is not on the template!`);
					}
				}
			}else{
				console.log('no set data');
			}
			return this;
		},
		setViewConfig: function(data){
			const me = this;
			const checkData = data ? Object.keys(data) : {};
			if(checkData && checkData.length){
				const count = checkData.length;
				for(let a = 0; a < count; a++){
					const index = checkData[a];
					const loopdata = data[index];
					if(me.view[index]){
						me.view[index] = loopdata;
					}else{
						console.log(`${index} is not on the view config!`);
					}
				}
			}else{
				console.log('no set data');
			}
			return this;
		},
		setContent: function(data){
			const me = this;
			const checkData = data ? Object.keys(data) : {};
			if(checkData && checkData.length){
				const count = checkData.length;
				for(let a = 0; a < count; a++){
					const index = checkData[a];
					const loopdata = data[index];
					if(me.content[index]){
						me.content[index] = loopdata;
					}else{
						console.log(`${index} is not on the view config!`);
					}
				}
			}else{
				console.log('no set data');
			}
			return this;
		},
		setComponent: function(data){
			const finalPath = `${this.dir}${data}`;
			if(data && this.checkFile(finalPath)){
				this.contentComponent = finalPath;
			}else{
				this.contentComponent = this.template.error.err404;
			}
			return this;
		},
		play: function(req,res){
			try{
				console.log('play is trigger');
				const options = {
					title: this.content.title,
					subTitle: this.content.sub,
					icon: this.content.icon,
					header: this.template.header,
					footer: this.template.footer,
					sidebar: this.template.sidebar,
					content: this.contentComponent,
					data: this.data,
					view: this.view,
					assets: this.assets
				}
				res.render(this.template.layout, options);
			}catch(err){
				res.status(500).send();
			}
		}
	}
}