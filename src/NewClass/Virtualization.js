import React, { useRef, useState, useEffect } from "react";
import {
  select,
  line,
  curveCardinal,
  scaleLinear,
  axisBottom,
  axisRight,
} from "d3";
import LineGraph from "./LineGraph";
import DoughnutGraph from "./Doughnut";

const Virtualization = () => {
  const svgRef = useRef();
  const [data, setData] = useState([0, 12, 57, 20, 45, 68, 55, 23, 47, 31]);

  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);
    const yScale = scaleLinear().domain([0, 70]).range([150, 0]);

    const xAxis = axisBottom(xScale).ticks(data.length);
    const yAxis = axisRight(yScale);

    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    const newLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", (value) => newLine(value))
      .attr("stroke", "red")
      .attr("fill", "none");
  }, [data]);
  return (
    <div>
      <br />
      <br />
      <center>The Virtual</center>
      <br />
      <center>
        <svg
          ref={svgRef}
          style={{
            backgroundColor: "lightblue",
            overflow: "visible",
          }}
        >
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </center>
      <br />
      <br />
      <center>
        <LineGraph />
        <br />
        <br />
        <br />
        <DoughnutGraph />
      </center>
    </div>
  );
};

export default Virtualization;
