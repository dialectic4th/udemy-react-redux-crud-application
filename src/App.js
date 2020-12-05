import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//JSX
// class App extends Component {
//   render() {
//     return <div>Hello, world!<>;
//   }
// }

//Javascript
class App extends Component {
  render() {
    return React.createElement(
        "div",
        null,
        "Hello world"
    )
  }
}

export default App;
