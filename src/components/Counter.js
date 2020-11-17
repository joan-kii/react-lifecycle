import React, { Component } from 'react';

const ErrorComponent = () => <div>{/* props.ignore */}</div>;

class Counter extends Component {
  constructor(props) {
    console.log('Constructor ---------- !!!')
    super(props)

    this.state = {
      counter: 0,
      seed: 0,
      initializing: true
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
    setTimeout(() => {
      this.setState({initializing: false})
    }, 500)
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
    console.log('Get Snapshot Before Update ------ !!!')
    return null;
  }
    
  render() {
    console.log('Render ---------- !!!');

    if (this.state.initializing) {
      return <div>Inicializando...</div>
    }

    if (this.props.showErrorComponent && this.state.error) {
      return <div>Hemos encontrado un error! {this.state.error.message}</div>
    }

    return (
      <div>
        <button onClick={this.increment}>Incrementar</button>
        <button onClick={this.decrement}>Decrementar</button>
        <div className='counter'>
            Contador: {this.state.counter}
        </div>
        {this.props.showErrorComponent ? 
          <ErrorComponent /> : null}
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update --------- !!!');
    console.log('------------------');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount -------- !!!');
    console.log('------------------');
  }

  componentDidCatch(error, info) {
    console.log('Component Did Catch --------- !!!');
    this.setState({error, info});
  }
}

export default Counter;
