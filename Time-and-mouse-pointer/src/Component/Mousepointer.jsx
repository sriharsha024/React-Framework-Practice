import { useState, useEffect } from 'react';

function MousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="mouse-pointer-container">
      <h1>Mouse Pointer Position</h1>
      <div className="position-display">
        <p><strong>X:</strong> {position.x}</p>
        <p><strong>Y:</strong> {position.y}</p>
      </div>
    </div>
  );
}

export default MousePointer;
