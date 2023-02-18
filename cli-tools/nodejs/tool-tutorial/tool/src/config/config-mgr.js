const chalk = require('chalk');
const pkgUp = require('pkg-up');
const { cosmicconfigSync } = require('cosmiconfig');
const configLoader = cosmiconfigSync('tool');

module.exports = function getConfigOriginal(){
	const pkgPath = pkgUp.sync({cwd: process.cwd()});
	const pkg = requrie(pkgPath);

	if(pkg.tool){
		console.log('Found configuration', pkg.tool);
		return pkg.tool;
	}else if(hasJSConfigFile()){
		return loadJSConfigFile();
	}else {
		console.log(chalk.yellow('Could not find the configuration files.'));
		return { port: 1234 };
	}
}

module.exports = function getConfig(){
	const result = configLoader.search(process.cwd());
	
	if(!result){
		console.log(chalk.yellow('Could not find it'));
		return { port: 1234 };
	} else {
		console.log('FOund configuration', result.config);
		return result.config;
	}
}










