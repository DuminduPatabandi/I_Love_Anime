import React, { useEffect } from "react";
import * as echarts from 'echarts';

const Chart = ({ data }) => {
  useEffect(() => {
    let chartContainer = document.getElementById('chart-container');
    let chart = echarts.init(chartContainer);

    let options = {
      xAxis: {
        type: 'category',
        data: data.map((item) => item.anime),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: data.map((item) => item.votes), // Assuming 'votes' is the key for the number of votes
          type: 'bar',
        },
      ],
    };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div id="chart-container" style={{ width: '100%', height: '400px' }}></div>;
};

export default Chart;
