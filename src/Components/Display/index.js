import React, { Component } from 'react';
import './styles.css';

class Display extends Component {

  render() {
    return (<div className="Display">Finnigan {this.props.children}</div>);
  }
}

export default Display;
