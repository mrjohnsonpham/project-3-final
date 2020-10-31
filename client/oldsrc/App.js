import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';


function App() {
  const [apiResult, setApiResult] = useState();

  useEffect( () => {
    // on load run this api call
    API.testApi()
    .then( result => {
      setApiResult(result);
    })
    .catch( err => {
      console.log(err);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Result: {(apiResult && apiResult.data) || ""}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
