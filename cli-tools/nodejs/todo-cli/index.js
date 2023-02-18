#! /usr/bin/env node

const { program } = require('commander')
const list = require('./commands/list')
const add = require('./commands/add')
const markDone = require('./commands/markDone')

program
	.command('list')
	.description('List all the TODO tasks')
	.action(list)

program
	.command('add <task>')
	.description()
	.action(add)

program
	.command('mark-done')
	.description('Mark Commands Done')
	.option('-t, --tasks <tasks...>', 
			'The tasks to mark done.')
	.action(markDone)

program.parse()














