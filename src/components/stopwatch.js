import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className='container'>
      <div style={{ fontSize: '2em' }}>{seconds}s</div>
      <hr />
      <div className='row'>
        <button className='btn btn-primary' onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className='btn btn-danger' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
