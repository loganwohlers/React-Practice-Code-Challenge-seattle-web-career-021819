import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state={
      sushiRolls: [],
      platesEaten: [],
      index: 0,
      currBalance: 100,
    }
  }

  //cb's
  //add to plates eaten & subtract balance
  eatSushi=(roll)=>{
    this.setState({
      platesEaten: [...this.state.platesEaten,roll]
    })

    this.setState({currBalance: (this.state.currBalance-roll.price)})
  }

  moreSushi=()=>{
    const newIndex=this.state.index+4
    this.setState({index: newIndex})
  }

  componentDidMount(){
    fetch(API)
    .then(response=>response.json())
    .then(data=>this.setState({sushiRolls: data}))
  }

  render() {
    const {sushiRolls, platesEaten, index, currBalance}=this.state
    return (
      <div className="app">
        <SushiContainer 
          currRolls={sushiRolls.slice(index, index+4)} 
          eatSushi={this.eatSushi} 
          platesEaten={platesEaten}
          moreSushi={this.moreSushi}  />

        <Table platesEaten={platesEaten} currBalance={currBalance} />
      </div> 
    );
  }
}

export default App;