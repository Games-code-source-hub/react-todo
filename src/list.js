import React from 'react';

const dataList = [
    {label: "Market", important:false},
    {label: "House", important:false},
    {label: "Abyss", important:false}
  ];

const List = (dataList) => {
    const checks = ["apple","cola-fanta","pelmeni"]
    checks[3] = "pine"
    checks.push("wha")
    const redText = {
      color: "red",
    }
  return (
      <div className="col-2">
          <h2>h2</h2>
          <input type="text" size="10"/><br/>
          <input type="checkbox"/><label htmlFor="in1">{checks[0]}</label><br/>
          <input type="checkbox"/><label style={redText} htmlFor="in2">{checks[1]}</label><br/>
          <input type="checkbox"/><label htmlFor="in3">{checks[2]}</label><br/>
          <input type="checkbox"/><label htmlFor="in3">{checks[3]}</label><br/>
      </div>
  );
}

export default {List}