import { useState } from 'react';
import './App.css'
function App() {


  const [state, setState] = useState();

  const observeNameInput = (e) => {
    setState(e.target.value)
  }
  console.log(state)
  return (
    <>
      <input type="text" name="name" id="name" onChange={observeNameInput} />
    </>
  )
}

export default App
