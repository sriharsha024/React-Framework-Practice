import { useState } from 'react';

function useCount(initialCount = 0) {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset=()=>setCount(initialCount);
  return { count, increment, decrement, reset };
}

export default useCount;
