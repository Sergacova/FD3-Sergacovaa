import React from "react";


// tip: чтобы встроить переменную в JSX используйте фигурные скобки {name}
export const Book = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.year),
    React.createElement("p", {}, props.price)
  ]);
};

const App = () => {
  return (
    <div>
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React for beginners" year="2019" price="1200" />
      <Book name="Vue for beginners" year="2021" price="1500" />
    </div>
  );
};

export default App;