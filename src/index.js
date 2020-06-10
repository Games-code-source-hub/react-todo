import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import List from "./list.js"
import Todo from "./todo.js"
const header = (
  <h1>header</h1>
);

const App = () => {
  return (
      <div className="container">
         <div className="row justify-content-center">{header}</div>
          <div className="row"><Todo/><List/></div>
      </div>
  )
}


ReactDOM.render(<App/> , document.getElementById("root"));
