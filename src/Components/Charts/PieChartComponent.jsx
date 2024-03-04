import ReactECharts from "echarts-for-react";

export const PieChartComponent = ({ data }) => {
  const option = {
    series: [
      {
        name: 'Sales',
        type: 'pie',
        data: data.labels.map((label, index) => ({
          value: data.datasets[0].data[index],
          name: label,
        })),
      },
    ],
  };

  return <ReactECharts option={option} autoresize={true} style={{ height: '400px', width: '100%' }} />;
};
