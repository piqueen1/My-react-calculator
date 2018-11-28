import React, { Component } from 'react';
import './styles.css';

class Button extends Component {

  render() {
    return (<div className="Button">{this.props.data}</div>);
  }
}

export default Button;