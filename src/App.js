import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import './scss/import.scss'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }

  //   getTasks()
  // }, [])
  // Fetch Tasks
  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data = await res.json()

  //   return data
  // }

  // Fetch Task
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data = await res.json()

  //   return data
  // }

  // Delete Task
  const deleteTask = async (id) => {
    // const url = `http://localhost:5000/tasks/${id}`
    // await fetch(url,
    //   {
    //     method: 'DELETE',
    //     headers: { 'Content-Type': 'application/json', },
    //     body: null,
    //   })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder

  // const toggleReminder = async (id) => {
  //   // const taskToggleReminder = await fetchTask(id);
  //   const updTask = { ...taskToggleReminder, reminder: !taskToggleReminder.reminder }

  //   // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //   //   method: 'PUT',
  //   //   headers: { 'Content-Type': 'application/json', },
  //   //   body: JSON.stringify(updTask),
  //   // })

  //   // const data = await res.json()

  //   setTasks(tasks.map((task) =>
  //     task.id === id ? {
  //       ...task, reminder: data.reminder
  //     } : task
  //   ))
  // }

  // Add Task
  const addTask = (task) => {
    // fetch('http://localhost:5000/tasks',
    //   {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', },
    //     body: JSON.stringify(task),
    //   })

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  return (
    <Router>
      <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} text={showAddTask ? 'Đóng' : 'Thêm'} />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddTask ? <AddTask onAdd={addTask} /> : ''}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /*onToggle={toggleReminder}*/ /> : <p>Hãy thêm công việc</p>}
            </>
          )} />
        <Route path='/about' component={About} />
        <Footer />
        <div className='col-12' style={{marginTop: "100px"}}>
          <img 
            src="https://camo.githubusercontent.com/9340781786d1aedaa42a657fe542d35d0c1836bdb445313d8c23a360930d7679/68747470733a2f2f692e696d6775722e636f6d2f76424f6b666c432e676966" 
            alt="photo" 
            style={{position: "absolute", left: "50%", transform: "translateX(-50%)",   backgroundColor: "whitesmoke"}}
            />
        </div>
      
      </div>
    </Router>
  );
}

export default App;
