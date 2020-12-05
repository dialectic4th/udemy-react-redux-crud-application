import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const greeting = "Hi, Tom"
    const dom = <h1　className="foo">{greeting}</h1>
    return (
      //return値は一つのみ
      //divタグで実行するとdivタグが二つ表示される。divタグの代わりにReactFragmentを用いると防げる（らしい）
      //<div>
      <React.Fragment>
        <label htmlFor="bar">{dom}</label>
        <input type="text" onChange={ ()=>{console.log("I am clicked.")}}/>
      </React.Fragment>//</div>
    )    
  }
}

export default App;
