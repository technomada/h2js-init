#!/usr/bin/env node
const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')

//upg: commander (for advansed processes) .. like project name.

let from = __dirname+'/templates/default'
//let to = './app'
let to = '.'
if(!fs.existsSync(to+'/src')){ // upg: or??
	;(async n=>{
		let {pre,post} = require(from+'/init.js')
		
		//upg: try. error correction.
		let r = await fse.copy(from+'/files',to);
		console.log('App Setup.')//upg: next instructions

		if(typeof(post) == 'function'){
			let p = await post({to:path.resolve(to)}) // upg pass {opts}
			}
		})();


	}//if
else
	console.log(to,'exists')




