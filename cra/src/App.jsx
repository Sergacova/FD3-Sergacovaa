import React, {Component} from "react"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

class App extends Component {
  state = {
    count: 0
  };

handleClick = () => {
  this.setState ({count: this.state.count+1});
  
  console.log("from hadle click");
}
  //this.setState((prevState) => ({count: this.state.count +1}), () => {
  // this.setState((prevState) => ({count: this.state.count +1})
  // this.setState((prevState) => ({count: this.state.count +1})



  render () {

  return (
    <div className="App">
   hello from React
   <button onClick={this.handleClick}>{this.state.count}</button>
    </div>
  );
}
}
export default App;
