import React, { useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const GraphApp = () => {
  const [chart, setChart] = useState([]);
  const [age, setAge] = useState([]);
  const [ageData, setAgeData] = useState([]);
  const [salary, setSalary] = useState([]);
  // const [empSal, setEmpSal] = useState([]);
  // const [empAge, setEmpAge] = useState([]);
  let empSal = [];
  let empAge = [];
  const chartDesign = async () => {
    const data = await axios.get(
      "http://dummy.restapiexample.com/api/v1/employees"
    );

    if (data) {
      setAge(data.data.data);
      for (const i of age) {
        empSal.push(parseInt(i.employee_salary));
        empAge.push(parseInt(i.employee_age));
        // setEmpSal.push(parseInt(i.employee_salary));
        // setEmpAge.push(parseInt(i.employee_age));
        setAgeData(empAge);
        setSalary(empSal);
      }
    }
    console.log(empAge);
    console.log(empSal);
  };

  React.useEffect(() => {
    chartDesign();
  }, []);

  return (
    <div>
      <div>Stock Market</div>
      {age.map(({ employee_age, employee_salary, employee_name, id }) => (
        <div key={id}>
          {employee_salary} : {employee_name} : {employee_age}
        </div>
      ))}
      <div></div>
      <br />
      <br />
      <br />
      <br />
      <div>{}</div>
      <div>Hello</div>
    </div>
  );
};

export default GraphApp;
