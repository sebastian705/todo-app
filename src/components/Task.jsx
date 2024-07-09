import React from 'react'

const Task = ({task, editTask, deleteTask}) => {
  return (
    <div className='card-task'>
      <h3 className='title'>{task.title}</h3>
      <button className='btn-editar' onClick={() => editTask(task.id, task.title)}>Editar</button>
      <button className='btn-eliminar' onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  )
}

export default Task