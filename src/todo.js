import React from 'react';

const dataTodo = [
    {label: "Market", important:false},
    {label: "House", important:false},
    {label: "Abyss", important:false}
  ];

const Todo = (dataTodo) => {
  return (
    <div className="col-10">
          <h2>h2</h2>
          <input type="text" size="10"/>
          <button>Add</button><br/>
          <input type="radio"/><label htmlFor="in1">dataTodo[0].label</label><br/>
          <input type="radio"/><label htmlFor="in2">dataTodo[1].label</label><br/>
          <input type="radio"/><label htmlFor="in3">dataTodo[2].label</label><br/>
    </div>
  )
}

export default {Todo}