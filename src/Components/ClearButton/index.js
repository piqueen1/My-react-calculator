import React, { Component } from 'react';
import './styles.css';

class ClearButton extends Component {

  render() {
    return (<div className="ClearButton">{this.props.data}</div>);
  }
}

export default ClearButton;