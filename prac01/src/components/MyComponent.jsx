import { useEffect, useRef,useState} from 'react';

export default function MyComponent() {
  const inputRef = useRef(null);
  const [count,setCount] = useState(0);

  function handleClick() {
    inputRef.current.focus();
    setCount(count+1);

  }
  

  useEffect(()=>{
    console.log(inputRef);
  })

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>포커스</button>
      <p>{count}</p>
    </>
  );
}
