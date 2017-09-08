import React, { Component } from 'react';




class Todos extends Component {
  constructor(props){
    super(props);
    this.state = {
      click: false,
    }
  }
  
  clickHandler() {
    if(!this.state.click) {
      this.setState({
        click: true,
      });
      document.getElementById("checkbox").checked = this.state.click;
     }else {
      this.setState({
        click: false,
      });
      document.getElementById("checkbox").checked = this.state.click;
  }
}

  render() {
    return (
      <div className="parent">
        <input type="checkbox" id="checkbox" onClick={ () => {this.clickHandler(); }}/>
        <p onClick={ () => {this.clickHandler(); }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    );
  }
}

export default Todos;
