import { useReducer } from "react";
import "./App.css";
import Adder from "./components/Adder";
import List from "./components/List";


let nextId = 1;



function App() {




  console.log(tasks);

  return (
    <div className="App">
      <Adder handleAddTask={handleAddTask} />
      <List tasks={tasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}
export default App;