import React, { Component } from 'react';
import './styles.css';
import Button from '../Button';

class Buttons extends Component {

  render() {
    return (
      <div className="Buttons">
        {this.props.children}
        <Button onclick={this.calculateOperations()} value="7" label="7" />
      </div>    
      );
  }
}

export default Buttons;