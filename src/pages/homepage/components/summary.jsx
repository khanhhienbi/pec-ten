import React from "react";
import Highcharts from "react-highcharts";

let config = {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Stacked bar chart'
  },
  xAxis: {
    categories: ['Adidas', 'Bayer', 'Beiersdorf', 'BMW', 'Commerzbank','Deutsche Bank']
  },
  yAxis: {
    min: -1,
    max: 1,
    title: {
      text: ''
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
    name: 'Twitter Sentiment',
    data: [0, 0, 0, 0, 2]
  }, {
    name: 'News Sentiment',
    data: [0, 0, -1, 1, 1]
  }, {
      name: 'Profitability',
      data: [1, 0, 1, 1, 1]
  }, {
    name: 'Risk',
    data: [0, 0, 0, 0, 5]
  }]
}

export class Summary extends React.Component {ß
  render() {
    return <Highcharts config={config} ref="chart" />;
  }
}
