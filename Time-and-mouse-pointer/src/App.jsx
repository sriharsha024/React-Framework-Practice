import React, { useRef } from 'react';
import ParentComponent from './Component/ParentComponent';
import Time from './Component/Time';
import './App.css';

function App() {
  // useRef
  // persist values across renders
  // does not cause the component to re-render for every value change
  //used with DOM elements, animations, focus, media playback, and form submission
  const myRef = useRef("Hello world");
  console.log(myRef.current);

  return (
    <div className="app-container">
      <div className="box">
        <Time />
      </div>
      <div className="box">
        <ParentComponent />
      </div>
      <div className="box">
        <p>{myRef.current}</p>
      </div>
    </div>
  );
}

export default App;
