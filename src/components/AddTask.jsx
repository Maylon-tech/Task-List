import React, { useState } from 'react'
import './AddTask.css'
import Button from './Button'

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("")

  const handleInputChange = (e) => {
    const data = e.target.value
    setInputData(data)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
  }

  return (
    <div className='add-task-container'>

        <input 
        value={inputData}
        onChange={() => handleInputChange}
          className='add-task-input' 
          type="text" 
        />

        <div className="add-task-btn">
          <Button
            onClick={handleAddTaskClick}
          >
            Adicionar
          </Button>
        </div>

    </div>
  )
}

export default AddTask