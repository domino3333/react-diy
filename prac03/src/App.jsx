import { useReducer, useRef } from 'react'
import Adder from './Adder'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import reducer from './reducer/reducer'
import { SongStateContext } from './context/SongStateContext'

function App() {

  const [song, dispatch] = useReducer(reducer, [])
  const idRef = useRef(1);
  function createItem(input) {
    dispatch({
      type: 'create',
      id: idRef.current++,
      title: input.title,
      singer: input.singer,
      genre: input.genre
    })
  }

  function deleteItem(id) {
    dispatch({
      type: 'delete',
      id: id,
    })
  }



  return (
    <>
      <SongStateContext.Provider value={{song}}>
        <Header />
        <Adder createItem={createItem} />
        <List deleteItem={deleteItem} />
      </SongStateContext.Provider>
    </>
  )
}

export default App
