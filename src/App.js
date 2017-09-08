import React, { Component } from 'react';
import './App.css';
import Search from './components/search.js';
import Todos from './components/todos.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <Todos/>
      </div>
    );
  }
}

export default App;
