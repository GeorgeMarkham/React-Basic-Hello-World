// const React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class App extends React.Component{
  render(){
    return(

      <div>
        <h1>Hello Universe!</h1>
      </div>

    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById("app")
);