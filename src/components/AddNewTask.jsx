import { useState } from "react"


const AddNewTask = ({addNewTask}) => {
    const [newTask, setNewTask] = useState({title: '', description: '', completed: false , id: Date.now()})
    
    const handleAddTask = () => {
       if (newTask.title.trim() && newTask.description.trim()) {
        setNewTask({title: '', description: '', completed: false , id: Date.now()})
        addNewTask(newTask)
       }
       else {
        alert('Please fill in all fields')
       }        

    }
  return (
    <div className='add'>
      <input value={newTask.title} onChange={(e) => setNewTask({...newTask, title: e.target.value})} type="text" placeholder="Add new task"/>
      <input value={newTask.description} onChange={(e) => setNewTask({...newTask, description: e.target.value})} type="text" placeholder="beskrivningen"/>
      <button onClick={handleAddTask}>Add</button>
    </div>
  )
}

export default AddNewTask
