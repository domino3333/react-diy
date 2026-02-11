import { useReducer } from "react";
import "./App.css";
import Adder from "./components/Adder";
import List from "./components/List";
import reducer from "./reducer/tasksReducer";
import { StateContext } from "./context/StateContext";



function App() {

  const [state, dispatch] = useReducer(reducer, []);



  console.log(state);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Adder />
        <List/>
      </div>
    </StateContext.Provider>
  );
}
export default App;