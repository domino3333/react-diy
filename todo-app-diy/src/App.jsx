import './App.css'
import Adder from './components/Adder'
import Header from './components/Header'
import List from './components/List'
import { useState,useRef } from 'react'

function App() {
  const idRef = useRef(0);

  const [todos, setTodos] = useState([{
    id: -1,
    content: "축구",
    date: new Date().getTime()
  }]);

  const addContentToTodos = (content) => {

    if (content === '') return;

    const newContent = {
      id:idRef.current++,
      content:content,
      date:new Date().getTime()
    }

    setTodos([...todos, newContent])
  }

  return (
    <>
      <div className='App'>

        <Header />
        <Adder addContentToTodos={addContentToTodos} />
        <List todos={todos}/>
        <p>{console.log({ todos })}</p>
      </div>
    </>
  )
}

export default App
