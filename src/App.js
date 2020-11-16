import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      mounted: true,
      ignoreProp: 0,
      seed: 40
    }

    this.mountCounter = () => this.setState({mounted: true});
    this.unmountCounter = () => this.setState({mounted: false});
    this.ignoreProp = () => this.setState({ignoreProp: Math.random()});
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)});
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.mountCounter} disabled={this.state.mounted}>Activar Contador</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mounted}>Desctivar Contador</button>
        <button onClick={this.ignoreProp}>Ignorar</button>
        <button onClick={this.seedGenerator}>Aleatorio</button>
        {this.state.mounted ? 
        <Counter 
          ignoreProp={this.state.ignoreProp}
          seed={this.state.seed} /> : 
          null}
      </div>
    )
  }
}

export default App;
