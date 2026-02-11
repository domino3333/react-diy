import { useReducer } from 'react'
import Adder from './Adder'
import './App.css'
import Header from './components/Header'
import List from './components/List'

function App() {

  const[song,setSong] = useReducer(reducer,[])

  return (
    <>
      <Header/>
      <Adder/>
      <List/>

    </>
  )
}

export default App
