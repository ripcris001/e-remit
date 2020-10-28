const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const system = global.__system;
const root = global.__dir;
const template = global.__system.template;
const hmvc = {
	init: function(app){
		const count = system.route && system.route.length ? system.route.length : 0;
		if(count){
			router.use(function(req, res, next){
				const allowCoder = [200];
				const pageStatus = res.statusCode;
				if(allowCoder.indexOf(pageStatus) === -1){
					res.render(`error/index`, {code: pageStatus});
				}else{
					next();
				}
			});
			let component = {
				router: router,
				template: template
			};
			let failedPath = [];
			let failedPathCount = 0;
			for(let a = 0; a < count; a++){
				const loopdata = system.route[a];
				const filePath = `${root}${loopdata.route}`;
				const verifyPath = fs.existsSync(`${filePath}.js`);
				if(verifyPath){
					console.log(`${loopdata.path}`);
					const routeLoad = require(filePath)(component);
					app.use(`${loopdata.path}`, routeLoad);
				}
			}
		}else{
			app.use(function(req, res){
				res.status(404).send('No route Found');
			})
		}
	}
}
module.exports = hmvc;