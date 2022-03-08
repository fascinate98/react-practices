import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import React from 'react';




const App = function() {
  //const App = React.createElement('h1', null, 'Hello World');
  //return App;
  return (        
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  React.createElement('div', React.createElement('h1', null, 'helloworld'), null);
}

export { App }