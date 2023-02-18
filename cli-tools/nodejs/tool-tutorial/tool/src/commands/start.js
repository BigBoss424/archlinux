const chalk = require('chalk');

module.export = function start(config){
	console.log(chalk.yellow('Starting the App'));
	console.log(chalk.yellow('Starting the App'), config);
}