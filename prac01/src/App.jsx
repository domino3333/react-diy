
import './App.css'
import CafeButton from './components/CafeButton'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'
import Register from './components/Register'

function App() {

  const [count, setCount] = useState(0);


  return (
    <>
      <Register />
    </>
  )
}

export default App
