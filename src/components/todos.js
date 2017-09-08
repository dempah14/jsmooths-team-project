import React, { Component } from 'react';




class Todos extends Component {
  constructor(props){
    super(props);
    this.state = {
      click: false,
      style: {
        "opacity": "0"
      }
    };
  }

  clickHandler() {
    if(!this.state.click) {
      this.setState({
        style: {
          "opacity": "1",
        },
        click: true
      });
     }else {
      this.setState({
        style: {
          "opacity":"0"
        },
        click: false
      });
  }
}

  render() {
    return (
      <div className="parent">
        <img style={this.state.style} src="http://www.iconsdb.com/icons/preview/green/checked-checkbox-xxl.png"/>
        <p onClick={ () => {this.clickHandler(); }}>{this.props.text}</p>
      </div>
    );
  }
}

export default Todos;
