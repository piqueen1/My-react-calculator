import React, { Component } from 'react';
import './styles.css';
import Button from '../Button';

class Buttons extends Component {
  calculateOperations(props) {
    /* if...
     it's a number or operation: add it to the array that will become the eval string
     it's clear: make state = []
     it's equals: join state [] into string and use math.eval to display answer */
  }

  render() {
    return (
      <div className="Buttons">
        <Button onclick={this.calculateOperations()} value="7" label="7" />
        <Button onclick={this.calculateOperations()} value="8" label="8" />
        <Button onclick={this.calculateOperations()} value="9" label="9" />
        <Button onclick={this.calculateOperations()} value="/" label="/" />

        <Button onclick={this.calculateOperations()} value="4" label="4" />
        <Button onclick={this.calculateOperations()} value="5" label="5" />
        <Button onclick={this.calculateOperations()} value="6" label="6" />
        <Button onclick={this.calculateOperations()} value="x" label="x" />

        <Button onclick={this.calculateOperations()} value="1" label="1" />
        <Button onclick={this.calculateOperations()} value="2" label="2" />
        <Button onclick={this.calculateOperations()} value="3" label="3" />
        <Button onclick={this.calculateOperations()} value="-" label="-" />

        <Button onclick={this.calculateOperations()} value="0" label="0" />
        <Button onclick={this.calculateOperations()} value="." label="." />
        <Button onclick={this.calculateOperations()} value="=" label="equals" />
        <Button onclick={this.calculateOperations()} value="+" label="+" />
        <Button onclick={this.calculateOperations()} value="clear" label="Clear" />
      </div>
      );
  }
}

export default Buttons;