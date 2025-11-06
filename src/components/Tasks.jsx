

const Tasks = ({tasks, isComplete, deleteTask}) => {
  return (
    <div className='tasks'>
      {tasks.map(task => (
        <div key={task.id} className={task.completed ? 'task completed' : 'task'}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p> <input type="checkbox" onChange={() => isComplete(task.id)}   /></p>
          <button className='delete' onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Tasks
