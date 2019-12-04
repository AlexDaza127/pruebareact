import React from 'react';
import './App.css';
import tasks from './sample/tasks.json';


//componentes importados
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

//clase componente
class App extends React.Component {

  state = {
    tasks: tasks
  }

  //agregar una nueva tarea al componente Tasks
  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

deleteTask = (id) =>{
  const newTasks = this.state.tasks.filter(task => task.id !== id)
}

checkDone = () =>{
  
}

  //render = pintar en pantalla
  render() {
    return <div>
      <TaskForm addTask={this.addTask}></TaskForm>
      <Tasks tasks={this.state.tasks} />

    </div>
  }
}

//2:35:23

export default App;
