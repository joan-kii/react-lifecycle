import React, { Component } from 'react';

const ErrorComponent = () => <div>{props.ignore}</div>;

class Counter extends Component {
  constructor(props) {
    console.log('Constructor ---------- !!!')
    super(props)

    this.state = {
      counter: 0,
      seed: 0
    }

    this.increment = () => this.setState({counter: this.state.counter + 1});
    this.decrement = () => this.setState({counter: this.state.counter - 1});
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
  
    return null;
  }

  componentDidMount() {
    console.log('Component Did Mount ----- !!!');
    console.log('------------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp) {
        console.log('Component Should Update --NO RENDER-- !!!')
        console.log('------------------');
        return false;
      }
    
    console.log('Component Should Update --RENDER-- !!!')
    console.log('------------------');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Snapshot Befor Update ------ !!!')
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update --------- !!!');
    console.log('------------------');
  }

  componentDidCatch(error, errorInfo) {
    console.log('Component Did Catch --------- !!!');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount -------- !!!');
    console.log('------------------');
  }
    
  render() {
    console.log('Render ---------- !!!');
    return (
      <div>
        <button onClick={this.increment}>Incrementar</button>
        <button onClick={this.decrement}>Decrementar</button>
        <div className='counter'>
            Contador: {this.state.counter}
        </div>
        <ErrorComponent />
      </div>
    )
  }
}

export default Counter;
