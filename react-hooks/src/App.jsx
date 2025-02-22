import { useState } from 'react';
import './App.css';

function App() {
  const [counters, setCounters] = useState([{ id: 1, count: 0, step: 1 }]);

  const addCounter = () => {
    setCounters([...counters, { id: counters.length + 1, count: 0, step: 1 }]);
  };

  const deleteCounter = (id) => {
    setCounters(counters.filter(counter => counter.id !== id));
  };

  const updateCounter = (id, newCount) => {
    setCounters(counters.map(counter => 
      counter.id === id ? { ...counter, count: newCount } : counter
    ));
  };

  const updateStep = (id, newStep) => {
    setCounters(counters.map(counter => 
      counter.id === id ? { ...counter, step: newStep } : counter
    ));
  };

  return (
    <div className="app-container">
      <h1>Counters</h1>
      <button onClick={addCounter}>Add Counter</button>
      {counters.map(counter => (
        <div key={counter.id} className="counter">
          <h2>Counter {counter.id}</h2>
          <p>Count Value: {counter.count}</p>
          <input
            type="number"
            value={counter.step}
            onChange={(e) => updateStep(counter.id, parseInt(e.target.value))}
          />
          <button onClick={() => updateCounter(counter.id, counter.count + counter.step)}>Increment</button>
          <button onClick={() => updateCounter(counter.id, counter.count - counter.step)}>Decrement</button>
          <button onClick={() => deleteCounter(counter.id)}>Delete Counter</button>
        </div>
      ))}
    </div>
  );
}

export default App;
