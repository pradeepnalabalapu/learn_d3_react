import React, { Component } from "react";
import * as d3 from "d3";
class D3Chart extends Component {
  componentDidMount() {
    const data = [1, 1, 1];
    const circleRadius = 60;
    const circleDiameter = circleRadius * 2;
    const plot = (data, svg) => {
      const circle = svg.selectAll("circle").data(data);

      circle
        .enter()
        .append("circle")
        .attr("cy", circleRadius)
        .attr("cx", (d, i) => circleRadius + i * circleDiameter)
        .attr("r", circleRadius);

      circle.exit().remove();
    };

    const addCircle = () => {
      if (data.length < 5) data.push(1);
      plot(data, svg);
    };

    const removeCircle = () => {
      data.pop();
      plot(data, svg);
    };

    document.getElementById("addCircle").addEventListener("click", addCircle);
    document
      .getElementById("removeCircle")
      .addEventListener("click", removeCircle);

    const svg = d3.select("svg");
    plot(data, svg);
  }

  render() {
    return (
      <div>
        <svg width="600" height="120" />
        <button id="addCircle">Add circle</button>
        <button id="removeCircle">Remove circle</button>
      </div>
    );
  }
}
export default D3Chart;
