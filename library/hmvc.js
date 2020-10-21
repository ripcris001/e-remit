const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const system = global.__system;
const root = global.__dir;
const hmvc = {
	init: function(data){
		const count = system.route && system.route.length ? system.route.length : 0;
		if(count){
			let component = {
				router: router
			};
			let failedPath = [];
			let failedPathCount = 0;
			for(let a = 0; a < count; a++){
				const loopdata = system.route[a];
				const filePath = `${root}${loopdata.route}`;
				const verifyPath = fs.existsSync(`${filePath}.js`);
				//const verifyPath = false;
				if(verifyPath){
					const routeLoad = require(filePath)(component);
					data.use(`${loopdata.path}`, routeLoad);
				}
			}
		}else{
			console.log('sasasasa')
			data.use(function(req, res){
				res.status(404).send('No route Found');
			})
		}
	}
}
module.exports = hmvc;