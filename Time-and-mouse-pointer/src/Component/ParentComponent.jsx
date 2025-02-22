import { useState } from 'react';
import MousePointer from './MousePointer';

function ParentComponent() {
  const [isMounted, setIsMounted] = useState(true);

  const toggleMount = () => {
    setIsMounted(!isMounted);
  };

  return (
    <div className="parent-container">
      <button onClick={toggleMount} className="toggle-button">
        {isMounted ? 'Unmount MousePointer' : 'Mount MousePointer'}
      </button>
      {isMounted && <MousePointer />}
    </div>
  );
}

export default ParentComponent;