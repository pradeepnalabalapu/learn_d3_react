import React, { Component } from "react";
//import logo from '../logo.svg';
import "../styles/App.css";
import D3Chart from "./D3Chart";
import Multiline from "./Multiline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> Hello World! </p>
        <D3Chart />
        <div style={{ minHeight: "50px" }} />
        <Multiline chart_id="multiline_chart" />
      </div>
    );
  }
}

export default App;
