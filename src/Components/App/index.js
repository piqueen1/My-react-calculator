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

  calculateOperations() {
    
  }

  render() {
    return (
      <div className="App">
      Hi there
        {/* {this.props.children} */}
        <Display />
        <Buttons>
          <Button onclick={this.calculateOperations()} value="7" label="7"/>
        </Buttons>
      </div>
    );
  }
}

export default App;
