const conf = new (require('conf'))()
const chalk = require('chalk')

function list (){
		const todoList = conf.get('todo-list')

		if(todoList && todoList.length){
			console.log(chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.'))
				// chalk.blue.bold(('Tasks in green are done.' + '\n' 
				// 				+ 'Tasks in yellow are still working' + '\n'
				// 				+ 'Tasks in red are not done'))
			todoList.forEach((task, index) => {
				if(task.done){
					console.log(chalk.greenBright('${index}. $(task.text}'))
				}else{
				console.log(chalk.yellowBright('${index}. ${task.text}'))
			}
		})
	}else{
		console.log(chalk.red.bold('You haven\'t done any tasks'))
	}
}

module.exports = list 