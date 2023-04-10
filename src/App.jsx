import React, { useState } from 'react'
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title:"Estudar programming",
      completed: false,
    },
    {
      id:"2",
      title:"Ler Livros",
      completed: true,
    }
  ])

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
    {
      title: taskTitle,
      id: Math.random(10),
      completed: false,
    }]
    setTasks(newTasks)
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed}
    })
    setTasks(newTasks)
  }

  return (
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
