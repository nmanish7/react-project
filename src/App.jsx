import React, { useState, useEffect } from "react";
import "./App.scss";
import { RowComponent } from "./Components/RowComponent.jsx";
import { ColumnComponent } from "./Components/ColumnComponent.jsx";
import { BarChartComponent } from "./Components/Charts/BarChartComponent.jsx";
import { PieChartComponent } from "./Components/Charts/PieChartComponent.jsx";
import { LineChartComponent } from "./Components/Charts/LineChartComponent.jsx";
import { TableComponent } from "./Components/Charts/TableComponent.jsx";
import Papa from "papaparse";
import { Counter } from "./Counter.jsx";

const graphData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const loadUserData = async (setUserData) => {
  const response = await fetch("/customers-100.csv");
  const reader = response.body.getReader();
  const result = await reader.read(); // raw array
  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result.value);
  const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
  const data = results.data; // array of objects
  console.log(data);
  setUserData(data);
};

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    loadUserData(setUserData);
  }, []);
  return (
    <>
      <div className="full-height d-flex flex-column">
        <RowComponent>
          <ColumnComponent className="col-md-6">
            <BarChartComponent data={graphData} />
          </ColumnComponent>
          <ColumnComponent className="col-md-6">Table</ColumnComponent>
        </RowComponent>
        <RowComponent>
          <ColumnComponent className="col-md-4">
            <LineChartComponent data={graphData} />
          </ColumnComponent>
          <ColumnComponent className="col-md-4">
            {/* <LineChartComponent data={graphData} /> */}
            <Counter />
          </ColumnComponent>
          <ColumnComponent className="col-md-4">
            <PieChartComponent data={graphData} />
          </ColumnComponent>
        </RowComponent>
        <RowComponent>
          <ColumnComponent className="col-md-12"> 
            <TableComponent data={userData} />
          </ColumnComponent>
        </RowComponent>
      </div>
    </>
  );
}

export default App;
