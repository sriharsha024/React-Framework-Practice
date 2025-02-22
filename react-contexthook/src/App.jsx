import './App.css';
import { createContext, useContext, useState } from 'react';
import useCount from './UseCount';

const MyContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };

  const { count, increment, decrement,reset } = useCount();

  return (
    <div>
      <h2>Custom Hooks</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <MyContext.Provider value={theme}>
        <div className="app-container">
          <button onClick={toggleTheme} className="toggle-button">
            Toggle Theme
          </button>
          <ComponentA />
        </div>
      </MyContext.Provider>
    </div>
  );

  function ComponentA() {
    return (
      <div className="component-container-a">
        <h3>Component A</h3>
        <ComponentB />
      </div>
    );
  }

  function ComponentB() {
    return (
      <div className="component-container-b">
        <h3>Component B</h3>
        <ThemedComponent />
      </div>
    );
  }

  function ThemedComponent() {
    const theme = useContext(MyContext);
    return (
      <div className="themed-component">
        <h3>Themed Component</h3>
        <p>Theme: {theme}</p>
      </div>
    );
  }
}

export default App;
