import { useState, useEffect } from 'react';

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time-container">
      <h2>Current Date and Time</h2>
      <p>
        {currentTime.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })} 
        <br/><br/>
        {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </p>
    </div>
  );
}

export default Time;