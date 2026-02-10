import './App.css'
import Adder from './components/Adder'
import Header from './components/Header'
import List from './components/List'
import { useState,useRef,useReducer } from 'react'


function reducer(state,action){
  if(action.type === 'added'){
    return [...state,{
      id:action.id++,
      content:action.content,
      date:action.date
    }]
  }
}

function App() {
  const idRef = useRef(0);

  const [tasks, dispatch] = useReducer(reducer,[]);

  // const addContentToTodos = (content) => {

  //   if (content === '') return;

  //   const newContent = {
  //     id:idRef.current++,
  //     content:content,
  //     date:new Date().getTime()
  //   }

  //   setTodos([...todos, newContent])
  // }

  const handleAddTask = (content) => {

    dispatch({
      //액션 객체
      type:'added',
      id:idRef.current,
      date:new Date().getTime()
    });
  }

  return (
    <>
      <div className='App'>

        <Header />
        <Adder addContentToTodos={handleAddTask} />
        <List todos={tasks}/>
        <p>{console.log({ tasks })}</p>
      </div>
    </>
  )
}

export default App
