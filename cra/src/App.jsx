import React, {Component} from "react"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

class App extends Component {
  constructor (props){
  super (props);
  this.state = {
    count: 0 ,
    someKey: false,


   
  }
  }
handleClick = () => {
  this.setState({count: this.state.count +1})
}
  render (){

  return (
    <div className="App">
   hello from React
   <button onClick={this.handleClick}>{this.state.count}</button>
    </div>
  );
}
}

export default App;
