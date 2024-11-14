import React, { Component } from "react";
import Chart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-pie",
        },
        colors: ["#00E396", "#008FFB", "#FF4560"],
        legend: {
          position: "bottom",
          horizontalAlign: "left",
          floating: false,
          fontSize: "16px",
          labels: {
            colors: ["#000"],
            useSeriesColors: false,
          },
          markers: {
            width: 12,
            height: 12,
          },
          formatter: function (seriesName, opts) {
            return (
              seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
            );
          },
        },
      },
      series: [60, 25, 15],
      labels: ["Total Successful", "Total Pending", "Total Cancelled"],
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="pie"
        width="140%"
      />
    );
  }
}

export default PieChart;
