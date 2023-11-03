import React, { useEffect } from "react";
import * as echarts from 'echarts';

const Chart = ({ data }) => {

  useEffect(() => {

    const animeCounts = {};
    data.forEach((item) => {
      const { anime } = item;
      if (anime in animeCounts) {
        animeCounts[anime] += 1;
      } else {
        animeCounts[anime] = 1;
      }
    });

    const xAxisData = Object.keys(animeCounts);
    const yAxisData = xAxisData.map((anime) => animeCounts[anime]);

    const chartDom = document.getElementById('chart');
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: 'Voting Results',
      },
      textStyle: {
        align: 'center', 
        color: 'black',
      },
      color: '#ff58e7',
      xAxis: {
        type: 'category',
        data: xAxisData,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: yAxisData,
          type: 'bar',
        },
      ],
    };  
    

    myChart.setOption(option);

    const resizeHandler = () => {
      myChart.resize();
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
    
  }, [data]);

  return <div id="chart" style={{ width: '80%', height: '300px' }}></div>;
}

export default Chart;
