#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');



	try{

		const args = arg({
			'--start'		: Boolean,
			'--start-args'	: Boolean,
			'--start-hello'	: Boolean,
			'--start-extra' : Boolean,
			'--start-org'	: Boolean,
			'--start-usage' : Boolean,
			'--start-chalk'	: Boolean,	
			'--build'		: Boolean,
			'--build-org'	: Boolean,
			'--build-args' 	: Boolean,
			'--build-extra' : Boolean,
			'--build-chalk'	: Boolean,
			'--publish'		: Boolean,
		});

			if(args['--start']){
				console.log('starting the app');
			}
			if(args['--start-usage']){
				console.log(usage());
			}
			if(args['--start-extra']){
				console.log(args);
				console.log('Starting the App');
			}
			if(args['--start-args']){
				console.log(args);
			}
			if(args['--start-hello']){
				console.log('Hello World Tool');
			}
			if(args['--start-org']){
				console.log('Original log');
			}
			if(args['--start-chalk']){
				const pkg = require('./package.json');
				console.log(chalk.bgCyanBright('Yet To Implement...'));
				console.log(chalk.yellow(args));
			}
			if(args['--build']){
				console.log('Yet To Implement...');

			}
			if(args['--build-args']){
				console.log('Yet To Implement...');

			}
			if(args['--build-hello']){
				console.log('Yet To Implement...');

			}
			if(args['--build-org']){
				console.log('Yet To Implement...');

			}
			if(args['--build-chalk']){
				console.log('Yet To Implement...');

			}
			if(args['--build-extra']){
				console.log('Yet To Implement...');

			}
			if(args['--publish']){
				console.log('Does not exist yet');
			}
		}catch(e)
		{
			console.log('Error Message');
			console.log(e.message);
			usage();
			usageChalk();
		}

	function usage(){
		console.log('tool [CMD]\n\n--start\tStarts the app\n--build\tBuilds the app\n');		
	}
	function usageChalk() {

 	 console.log(`${chalk.whiteBright('tool [CMD]')}${chalk.greenBright('--start')}\tStarts the app${chalk.greenBright('--build')}\tBuilds the app`);
	}