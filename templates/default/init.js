const { spawnSync} = require('child_process');


const pre = function(opts){}
const post = opts=> new Promise((res,rej)=>{ // upg return promise
	opts = opts || {}
	//run this.
	console.log('init.js function run',opts)

	//const child = spawnSync('ls', ['-lh', '/usr']);

	let spawn_opts = {cwd:opts.to}
	console.log({spawn_opts})
	const child = spawnSync('npm',['i'],spawn_opts)
	console.log(child.stdout.toString()) // upg: realtime?
	res(true)
	})

module.exports = {pre,post}



