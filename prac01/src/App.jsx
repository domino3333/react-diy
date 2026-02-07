
import './App.css'
import CafeButton from './components/CafeButton'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'
import Register from './components/Register'
import Form from './components/Form'


export default function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form1 key={version} />
    </>
  );
}

function Form1({key}) {
  const [name, setName] = useState('Taylor');

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Hello, {name}.</p>
      <p>Hello, {key}</p>
    </>
  );
}

