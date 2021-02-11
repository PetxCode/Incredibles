import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";

const data = {
  labels: ["Red", "Green", "Yellow", "Black"],
  datasets: [
    {
      data: [300, 50, 100, 70],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "black"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "black"],
    },
  ],
};

const dataSet = {
  labels: [
    "Ola",
    "Timo",
    "Big Sam",
    "Yus Love",
    "Small Sam",
    "Ogi Emma",
    "Malush",
    "Gidy",
    "Josh",
    "Osas",
  ],
  datasets: [
    {
      label: ["Ola"],

      data: [28, 40, 19, 72, 16, 35, 71, 69, 92, 55],
      backgroundColor: [
        "pink",
        "red",
        "cyan",
        "aqua",
        "coral",
        "lightgreen",
        "yellow",
        "lightblue",
      ],
      hoverBackgroundColor: [
        "pink",
        "red",
        "cyan",
        "aqua",
        "coral",
        "lightgreen",
        "yellow",
        "lightblue",
      ],
    },
  ],
};

const DoughnutGraph = () => {
  return (
    <div>
      <h2>Doughnut Example</h2>
      <Doughnut data={data} />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Bar
        data={dataSet}
        style={{
          width: "600px",
          height: "300px",
          backgroundColor: "lightgray",
        }}
      />
    </div>
  );
};

export default DoughnutGraph;
