import { useReducer } from "react";
import "./App.css";
import Adder from "./components/Adder";
import List from "./components/List";
import reducer from "./reducer/tasksReducer";


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
  function handleEditedTask(id,text){
    dispatch({
      type:'edited',
      id:id,
      text:text
    })
  }

  console.log(tasks);

  return (
    <div className="App">
      <Adder handleAddTask={handleAddTask} />
      <List tasks={tasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}
export default App;