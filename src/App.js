import React, { useState } from 'react';
import Stopwatch from './components/stopwatch';
import './App.css';
import ColorBox from './components/colorBox';

export const ColorContext = React.createContext();

function App() {
  const [color, setColor] = useState('red');

  return (
    <ColorContext.Provider value={[color, setColor]}>
      <div className='container-fluid'>
        <h1 style={{ textAlign: 'center' }}>Umbrage React Hooks</h1>

        <div className='jumbotron p-4 p-md-5 text-white rounded bg-dark'>
          <div className='col-md-12 px-0'>
            <h1 className='display-5 font-italic'>useState and useEffect</h1>
            <div className='lead my-3'>
              <code>useState</code> takes advantage of array destructuring to
              give you the <strong>state</strong> variable and a function to
              update the state variable.
              <br />
              <a href='https://reactjs.org/docs/hooks-state.html'>
                Read more about <code>useState</code> here.
              </a>
              <hr />
              <code>seconds</code> is a state variable. It holds the number of
              seconds in integers. It is defaulted to <code>0</code> because
              that is the value passed into <code>useState()</code>. If no value
              was passed as an argument, it would instead be <code>null</code>.
              <hr />
              <code>setSeconds</code> is a function used to update the state of{' '}
              <code>seconds</code>. We pass it the new value of the state. Think
              of this in React State terms as the equivalent of:
              <pre>
                <code>{`this.setState({seconds: argument});`}</code>
              </pre>
              <hr />
              <code>isActive</code> and <code>setIsActive</code> follow the same
              pattern, but the state is a boolean variable instead of an
              integer. Defaulted to <code>false</code> since that was passed
              into <code>useState()</code>. It controls whether the stopwatch
              increments every second or not.
              <hr />
              <code>useEffect()</code> is the equivalent function as{' '}
              <code>componentDidMount()</code>
              and <code>componentDidUpdate()</code> combined into one. It fires
              off on initial render and again on every re-render or when props
              are passed in.
              <br />
              <a href='https://reactjs.org/docs/hooks-effect.html'>
                Read more about <code>useEffect</code> here.
              </a>
            </div>
            <Stopwatch />
            <br />
            <pre>
              <code>
                <p>
                  {`const [seconds, setSeconds] = useState(0);\nconst [isActive, setIsActive] = useState(false);\n\n  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);`}
                </p>
              </code>
            </pre>
            <a href='https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks'>
              Code Sourced from this article
            </a>
          </div>
        </div>

        <div className='jumbotron p-4 p-md-5 text-white rounded bg-dark'>
          <div className='col-md-12 px-0'>
            <h1 className='display-5 font-italic'>useContext Example</h1>
            <div className='lead my-3'>
              <code>useContext</code> lets you take advantage of the React
              Context API. You can pass information up/down the tree of
              components and hook into the context from any of the children that
              are nested under the Provider. If your provider is at the very top
              of your tree (i.e. <code>App.js</code>) then any of your
              components can use the context.
              <br />
              In this example, the provider context is using{' '}
              <code>useState</code> to manage how the context will be updated in
              the future.
              <br />
              <br />
              <h3>Context Provider</h3>
              <hr />
              <pre>
                <code>{`export const ColorContext = React.createContext();

function App() {
  const [color, setColor] = useState('red');

  return (
    <ColorContext.Provider value={[color, setColor]}>
      <div>App content goes here</div>
    </ColorContext.Provider>
  );
}
`}</code>
              </pre>
              <h3>Context Consumer</h3>
              <hr />
              <pre>
                <code>{`import React, { useContext } from 'react';
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
}`}</code>
              </pre>
              <br />
              <a href='https://reactjs.org/docs/hooks-reference.html#usecontext'>
                Read more about <code>useContext</code> here.
              </a>
            </div>
            <ColorBox />
          </div>
        </div>
      </div>
    </ColorContext.Provider>
  );
}

export default App;
