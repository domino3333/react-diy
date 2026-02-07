
import './App.css'
import CafeButton from './components/CafeButton'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'
import Register from './components/Register'
import Form from './components/Form'

function App() {

  const [count, setCount] = useState(0);


  return (
    <>
      <Form />
    </>
  )
}

export default App
