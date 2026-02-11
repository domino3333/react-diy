import { useReducer, useRef } from 'react'
import Adder from './Adder'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import reducer from './reducer/reducer'

function App() {

  const [song, dispatch] = useReducer(reducer, [])
  const idRef = useRef(1);
  function create(input) {
    dispatch({
      type: 'create',
      id: idRef.current++,
      title:input.title,
      singer:input.singer,
      genre:input.genre
    })
  }

  console.log(song);


  return (
    <>
      <Header />
      <Adder create={create}/>
      <List />

    </>
  )
}

export default App
