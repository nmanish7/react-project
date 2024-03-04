import ReactECharts from "echarts-for-react";

export const BarChartComponent = ({ data }) => {
  const option = {
    xAxis: {
      type: "category",
      data: data.labels,
    },
    yAxis: {
      type: "value",
    },
    series: data.datasets.map((dataset) => ({
      data: dataset.data,
      type: "bar",
      name: dataset.label,
      itemStyle: {
        color: dataset.backgroundColor[0], // Use the first color from the array
      },
    })),
  };

  return (
    <ReactECharts
      option={option}
      autoresize={true}
      style={{ height: "400px", width: "100%" }}
    />
  );
};
