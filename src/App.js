import { useState } from 'react';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


export default function App() {
  const [ showAddTask, setShowAddTask ] = useState(false)
  const [ tasks, setTasks ] = useState([{ 
    id: 1,
    text: "Do a swim",
    day: "February 5th at 1pm",
    reminder: false

  },
   {
     id: 2,
     text: "Do a jog",
     day: "February 9th at 9 pm",
     reminder: true,
   }]);
    //AddTask
   const addTask = (task) => {
     const id = Math.floor(Math.random() * 10000) + 1
     const newTask = { id, ...task }
     setTasks([...tasks, newTask])
   }


   //Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  } 

  //ToggleReinder
  const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) =>
        task.id === id ? 
      { ...task, reminder: !task.reminder } 
      : task
      )
      ) 
  }

  return (
    <div className="App">
      <Header 
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder} /> 
      : 'No tasks here bud'}
    </div>
  );
}
