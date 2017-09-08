import React, { Component } from 'react';

class Search extends Component {
  state = {
    userInput: ""
  }

  handleChange(input) {
    this.setState({ userInput: input })
  }

  render() {
    return (
      <div className="App">
        <div className="magnifying-glass">
          <input onChange={ (e) => { this.handleChange(e.target.value) } }></input>
        </div>
      </div>
    );
  }
}

export default Search;
