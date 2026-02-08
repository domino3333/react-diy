import './App.css'
import Adder from './components/Adder'
import Header from './components/Header'
import List from './components/List'
import { useState } from 'react'

function App() {

  const[todos,setTodos] = useState({
    id:-1,
    content:"축구",
    date:new Date().getTime()
  });

  return (
    <>
    <div className='App'>

      <Header/>
      <Adder setContent={setTodos}/>
      <List/>
      <p>{console.log({todos})}</p>
    </div>
    </>
  )
}

export default App
