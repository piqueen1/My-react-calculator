import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.operators = ['/', '*', '+', '-'];

    this.digits = ['1','2','3','4','5','6','7','8','9','0'];

    this.state = {
      steps: []
    };
  }

  pushOperator = (operator) => {
    return () => {
      // if there are no steps, ignore operator unless it's a -
      if (this.state.steps.length === 0 && operator !== '-') {
        return;
      }

      // if the prior value is an operator, replace that value with current operator
      const newSteps = this.state.steps.slice(0);
      const lastStep = newSteps.slice(-1)[0];

      if (this.operators.includes(lastStep)) {
        console.log('replacing lastStep:',lastStep);
        newSteps.splice(-1, 1, operator)
        this.setState({
          steps: newSteps,
        })
        return;
      }

      newSteps.push(operator)
      this.setState({
        steps: newSteps,
      })
    }
  }

  pushNumber = (num) => {
    return () => {
      this.state.steps.push(num)
      this.setState({
        steps: this.state.steps,
      })
    }
  }

  clearSteps = () => {
    this.setState({
      steps: [],
    })
  }

  evaluate = () => {
    const result = eval(this.state.steps.join(''));
    this.setState({
      steps: [result]
    })
  }

  render() {
    return (
      <div className="app">
        {/* Display */}
        <div className="display">
          {this.state.steps.join('')}
        </div>

        <div className="middle">
          {/* Numbers */}
          <div className="digits">
            {this.digits.map((digit) => (
              <button key={digit} onClick={this.pushNumber(digit)}>{digit}</button>
            ))}
          </div>

          {/* Operators */}
          <div className="operators">
            {this.operators.map((operator) => (
              <button key={operator} onClick={this.pushOperator(operator)}>{operator}</button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="actions">
          <button onClick={this.clearSteps}>Clear</button>
          <button onClick={this.evaluate}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
