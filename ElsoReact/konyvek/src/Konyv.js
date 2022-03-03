import logo from './logo.svg';
import './App.css';
import React from 'react';
import "./konyv.css"

class Konyv extends React.Component{
  constructor(props){
    super(props);
}
  render(){
    return (
      //React.createElement("div", {className="App"}, React.createElement("h1", null, "Heló Világ"))
      <div className="konyv">
        <h1>{this.props.cim}</h1>
        <h2>{this.props.szerzo}</h2>
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <h1>Helló világ!</h1>
    </div>
  );
}*/

export default Konyv;
