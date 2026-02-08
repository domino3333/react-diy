import { useEffect, useRef, useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>현재: {count}</p>
      <p>이전: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
