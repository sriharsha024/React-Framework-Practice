import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Counter from './Counter'
import Display from './Display';

function App() {

  return (
    <div>
      <p>Welcome</p>
      <Counter />
      <Display />
    </div>
  )
}

export default App
