import { useRef } from 'react';

export default function MyComponent() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>포커스</button>
    </>
  );
}
