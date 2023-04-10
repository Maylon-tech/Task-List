import React from 'react'
import './Task.css'

const Task = ({ task, handleTaskClick }) => {
  return (
    <div 
      className='Task'
      style={task.completed ? {borderLeft:"6px solid chartreuse" } : {}}
      > 
        <h1 className='task-title' onClick={() => handleTaskClick(task.id)}>
            {task.title}
        </h1>
    </div>
  )
}

export default Task