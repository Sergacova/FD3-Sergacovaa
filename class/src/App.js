import React, {useState} from "react";
import Timer from "./Timer";

function App(){
  const[isTimer, setTimer] =useState(false);
  return (
    <div className= "App">
      <h2>React App</h2>
      <button onClick={()=> setTimer(!isTimer)}>Toggle timer</button>
      {isTimer && <Timer />}
    </div>
  );
}

// function App() {
 // const [count, setCount] = useState(0);
  //const [loading, setLoading] = useState(false);

 // const increment = () => {
   // setCount(count + 1)
 // }
  
  //const decrement = () => {
   // setCount (count - 1)
  //}


 // return (
   // <div className="App">
    //<button onClick= {decrement}>-</button>
    //<span style={{display: "inline-block", margin: "0 0.5rem"}}>{count}</span>
    //<button onClick= {increment}>+</button>
    //</div>
 // );
//}

export default App;
