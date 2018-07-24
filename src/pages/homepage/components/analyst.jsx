import React from "react";
import Highcharts from "react-highcharts";

let config = {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Analyst Recommendation'
  },
  xAxis: {
    categories: ['Siemens', 'RWE', 'Lufthansa', 'Daimler', 'Covestro', 'BMW', 'Adidas', 'Beiersdorf', 'Deutsche Bank']
  },
  yAxis: {
    min: 0,
    max: 4,
    title: {
      text: 'Percentage'
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: 'Hold',
    data: [0, 0, 0, 0, 0, 0, 0, 2.9, 0]
  }, {
    name: 'Buy',
    data: [1.7, 2.1, 2.1, 2.3, 1.9, 2.8, 2, 0, 0]
  }, {
    name: 'Sell',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 3.6]
  }]
}

export class Analyst extends React.Component {ß
  render() {
    return <Highcharts config={config} ref="chart" />;
  }
}
