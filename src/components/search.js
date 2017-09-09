import React, { Component } from 'react';
import Todos from './todos.js'

const todos = [
  {
    id: 1,
    text: "Take out trash.",
  },
  {
    id: 2,
    text: "Do the dishes.",
  },
  {
    id: 3,
    text: "Do the laundry.",
  },
  {
    id: 4,
    text: "Feed the bebe'.",
  }
];

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todos
    };
  }


  handleChange(input) {
    var filteredTodos = [];
        for ( var i = 0; i < todos.length; i++ ) {
          if (todos[i].text.includes(input) ) {
            filteredTodos.push(todos[i]);
          }
        }
        this.setState({ todos: filteredTodos });
    }


  render() {
    const listOfTodos = this.state.todos.map( (todo) => {
      return(
        <Todos text={todo.text} key={todo.id} selector={todo.selector}/>
      )
    });

    return (
      <div className="App">
        <div className="magnifying-glass">
          <input placeholder= "Search To-Do's"onChange={ (e) => { this.handleChange(e.target.value) } }></input>
          {listOfTodos}
        </div>
      </div>
    );
  }
}

export default Search;
