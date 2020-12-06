import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Class Component
//functional Component　
//この２種類がある

const App  = () => {
  return (
    <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
    </div>
  )
  }

const Cat  = () => {
  return <div>Meow!</div>
  }
    
export default App;


/*
Meow!
Meow!
Meow!
Meow!
*/