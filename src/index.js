import React from 'react';
import ReactDOM from 'react-dom';

const header = (
  <h1>header</h1>
);

const Todo = () => {
  return (
    <div className="col-10">
          <h2>h2</h2>
          <input type="text" size="10"/>
          <button>Add</button><br/>
          <input type="radio"/><label htmlFor="in1">radio_button_#1</label><br/>
          <input type="radio"/><label htmlFor="in2">radio_button_#2</label><br/>
          <input type="radio"/><label htmlFor="in3">radio_button_#3</label><br/>
    </div>
  )
}

const List = () => {
  return (
      <div className="col-2">
          <h2>h2</h2>
          <input type="text" size="10"/><br/>
          <input type="checkbox"/><label htmlFor="in1">checkbox_button_#1</label><br/>
          <input type="checkbox"/><label htmlFor="in2">checkbox_button_#2</label><br/>
          <input type="checkbox"/><label htmlFor="in3">checkbox_button_#3</label><br/>
      </div>
  );
}

const App = () => {
  return (
      <div className="container">
         <div className="row justify-content-center">{header}</div>
          <div className="row"><Todo/><List/></div>
      </div>
  )
}

ReactDOM.render(<App/> , document.getElementById("root"));
