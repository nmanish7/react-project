import ReactECharts from 'echarts-for-react';

export const LineChartComponent = ({ data }) => {
  const option = {
    xAxis: {
      type: 'category',
      data: data.labels
    },
    yAxis: {
      type: 'value'
    },
    series: data.datasets.map(dataset => ({
      data: dataset.data,
      type: 'line',
      name: dataset.label,
    })),
  };

  return <ReactECharts option={option} autoresize={true} style={{ height: '400px', width: '100%' }} />;
};