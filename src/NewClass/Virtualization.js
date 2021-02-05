import React, { useRef, useState, useEffect } from "react";
import { select, line, curveCardinal } from "d3";
import { Button } from "antd";

const Virtualization = () => {
  const svgRef = useRef();
  console.log(svgRef);

  const [data, setData] = useState([0, 60, 25, 55, 75]);

  useEffect(() => {
    const svg = select(svgRef.current);
    // console.log(svg);
    // const x = svg.selectAll("circle").data(data);
    // console.log(x);
    // x.join("circle")
    //   .attr("r", (value) => value)
    //   .attr("cx", (value) => value)
    //   .attr("cy", (value) => value)
    //   .attr("stroke", "black")
    //   .attr("fill", "none");

    const newLine = line()
      .x((value, index) => index * 20)
      .y((value) => 200 - value)
      .curve(curveCardinal);

    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => newLine(value))
      .attr("stroke", "red")
      .attr("fill", "none");
  }, [data]);
  return (
    <div>
      <center>Virtualization</center>
      <br />
      <br />

      <center>
        <svg
          height="200"
          ref={svgRef}
          style={{
            backgroundColor: "lightgray",
          }}
        ></svg>
        <br />
        <br />

        <Button
          onClick={() => {
            setData(data.map((value) => value * 2));
          }}
        >
          {" "}
          Change{" "}
        </Button>
        <Button
          onClick={() => {
            setData(data.map((value) => value / 2));
          }}
        >
          {" "}
          Change Back{" "}
        </Button>
        <Button
          onClick={() => {
            setData(data.filter((value) => value < 60));
          }}
        >
          {" "}
          Filter{" "}
        </Button>
      </center>
    </div>
  );
};

export default Virtualization;
