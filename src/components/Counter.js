import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }
    
  render() {
    console.log('Render')
    return (
      <div>
        <div className='counter'>
            Counter: {this.state.counter}
        </div>
      </div>
    )
  }
}

export default Counter;
