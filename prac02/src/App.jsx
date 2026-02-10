import { useReducer } from "react";
import "./App.css";
import Adder from "./components/Adder";
import List from "./components/List";

function reducer(state, action) {

  switch (action.type) {
    case "added": {
      return  [...state, {
        id: action.id,
        text: action.text
      }]
    }
    case "deleted": {
      return state.filter((item) => item.id !== action.id)
    }

    default:{
      return state;
    }
  }
}

let nextId = 1;



function App() {


  const [tasks, dispatch] = useReducer(reducer, []);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    })
  }
  function handleDeleteTask(id) {
    dispatch({
      type: 'deleted',
      id: id
    })
  }

  console.log(tasks);

  return (
    <div className="App">
      <Adder handleAddTask={handleAddTask} />
      <List tasks={tasks} />
    </div>
  );
}
export default App;