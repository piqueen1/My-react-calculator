import React, { Component } from 'react';
import './styles.css';
import Display from '../Display';
import Buttons from '../Buttons';
import Button from '../Button';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operations: []
    };
  }

  calculateOperations(props) {

  }

  render() {
    return (
      <div className="App">
      Hi there
        {/* {this.props.children} */}
        <Display />
        <Buttons>
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
          <Button onclick={this.calculateOperations()} value="=" label="=" />
          <Button onclick={this.calculateOperations()} value="+" label="+" />          <Button onclick={this.calculateOperations()} value="clear" label="Clear" />
        </Buttons>
        <ClearButton />
      </div>
    );
  }
}

export default App;
