import { useReducer } from "react";
import "./App.css";
import Adder from "./components/Adder";
import List from "./components/List";
import reducer from "./reducer/tasksReducer";


let nextId = 1;

function App() {

  const [state, dispatch] = useReducer(reducer, []);

  function addState(content) {
    dispatch({
      type: 'create',
      id: nextId++,
      content: content,
      date: new Date().getTime()
    })
  }

  function deleteState(id) {
    dispatch({
      type: 'delete',
      id: id
    })
  }


  console.log(state);

  return (
    <div className="App">
      <Adder addState={addState} />
      <List tasks={state} deleteState={deleteState} />
    </div>
  );
}
export default App;