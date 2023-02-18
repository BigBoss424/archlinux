const conf = require('conf')
const chalk = require('chalk')

function markDone({tasks}){
	let todosList = conf.get('todo-list')

	if(todosList){
		todosList = todosList.map((task, index) => {
			if(tasks){
				if(tasks.indexOf(index.toString()) !== -1)
				{
					task.done = true
				}
			}else {
				task.done = true
			}
			return task
		});
		//set the new todo-list
		conf.set('todo-list', todosList)
	}

	//show the user a message
	console.log(chalk.green.bold('Tasks have been done are marked as such'))
}//end markDone function

module.exports = markDone