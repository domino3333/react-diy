
import './App.css'
import { useState } from 'react'


import Profile from "./components/Profile";

export default function App() {
  const [userId, setUserId] = useState(1);

  return (
    <>
      <button onClick={() => setUserId(1)}>유저 1</button>
      <button onClick={() => setUserId(2)}>유저 2</button>

      <Profile userId={userId} />
    </>
  );
}
