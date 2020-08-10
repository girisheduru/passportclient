import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { BrowserRouter as Router,Link,NavLink } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
               React on Express with AAD
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           Logged into React 
        </a>
        <p><a href="/logout">Logout Now</a></p>
      </header>
    </div>

  );
}

export default App;
