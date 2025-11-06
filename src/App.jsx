
import { useState } from 'react'
import './App.css'

import Tasks from './components/Tasks'
import AddNewTask from './components/AddNewTask'
function App() {

  const [tasks, setTasks] = useState([
    
  ])
  const addNewTask = (task) => {
    setTasks([...tasks, task])
  }
  const isComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
  }


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  return (
    <>
      <h1 className='text'>Todo List</h1>
      <AddNewTask addNewTask={addNewTask}  /> 
      <Tasks tasks={tasks}  isComplete={isComplete} deleteTask={deleteTask}/>
    </>
  )
}

export default App
