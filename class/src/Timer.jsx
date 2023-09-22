import React, { useEffect, useState } from 'react';

export default function App() {
  const [timer, setTimer] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let counter;
    if (toggle) {
      counter = setInterval(() => setTimer(timer => timer + 1), 1000);
    }
    return () => {
      clearInterval(counter);
    };
  }, [toggle]);

  const handleStart = () => {
    setToggle(true);
  };

  const handleStop = () => {
    setToggle(false);
  };

  const handleReset = () => {
    setTimer(0);
    setToggle(false);
  };

  return (
    <div>
      <h1>Hello react!</h1>
      <p>Current timer - {timer}</p>
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}