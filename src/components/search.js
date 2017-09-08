import React, { Component } from 'react';
import Todos from './todos.js'

const todos = [
  {
    id: 1,
    text: "Take out trash.",
    selector: "rand1"
  },
  {
    id: 2,
    text: "Do the dishes.",
    selector: "rand1verv"
  },
  {
    id: 3,
    text: "Do the laundry.",
    selector: "rarjjrye4nd1"
  },
  {
    id: 4,
    text: "Feed the bebe'.",
    selector: "raetjii5re5ind1"
  }
]

class Search extends Component {
  state = {
    userInput: "",
    todos: todos
  }

  handleChange(input) {
    this.setState({ userInput: input });
  }

  clickSearch() {
    this.setState({ todos: todos });
    var filteredTodos = [];

    if (this.state.userInput === "") {
      this.setState({ todos: todos });
    } else {
        for ( var i = 0; i < this.state.todos.length; i++ ) {
          if ( this.state.todos[i].text.includes(this.state.userInput) ) {
            filteredTodos.push(this.state.todos[i]);
          }
        }
        this.setState({ todos: filteredTodos });
    }

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
          <input onChange={ (e) => { this.handleChange(e.target.value) } }></input>
          <button onClick={ () => {this.clickSearch() } }>Search</button>
          {listOfTodos}
        </div>
      </div>
    );
  }
}

export default Search;
