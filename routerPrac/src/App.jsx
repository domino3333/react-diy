import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound"

const App = () => {

  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  }
  <button onClick={onClickButton}>
    New 페이지로 이동
  </button>
  return (
    <>
      <div>Hello</div>
      <Link to={"/"}>Home</Link><br />
      <Link to={"/new"}>New</Link><br />
      <Link to={"/diary"}>Diary</Link><br />
      <Link to={'/edit'}>Edit</Link><br />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
      <button onClick={onClickButton}>
        New 페이지로 이동
      </button >
    </>
  )
}

export default App
