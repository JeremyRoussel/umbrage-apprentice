import React, { useContext } from 'react';
import { ColorContext } from '../App';

function ColorBox() {
  const [color, setColor] = useContext(ColorContext);

  return (
    <div className='container'>
      <div style={{ backgroundColor: color, height: 100 }}></div>
      <hr />
      <div className='buttons'>
        <button className='btn btn-danger' onClick={() => setColor('red')}>
          Red
        </button>
        <button className='btn btn-primary' onClick={() => setColor('blue')}>
          Blue
        </button>
        <button className='btn btn-success' onClick={() => setColor('green')}>
          Green
        </button>
      </div>
    </div>
  );
}

export default ColorBox;
