import React, { Component } from 'react';




class Todos extends Component {
  constructor(props){
    super(props);
    this.state = {
      click: false,
      style: {
        "display": "none"
      }
    }
  }

  clickHandler() {
    if(!this.state.click) {
      this.setState({
        style: {
          "display": "block",
          "width": "20px"
        },
        click: true
      });
     }else {
      this.setState({
        style: {
          "display": "none"
        },
        click: false
      });
  }
}

  render() {
    return (
      <div className="parent">
        <img style={this.state.style} src="http://www.iconsdb.com/icons/preview/green/check-mark-8-xxl.png"/>
        <p onClick={ () => {this.clickHandler(); }}>{this.props.text}</p>
      </div>
    );
  }
}

export default Todos;
