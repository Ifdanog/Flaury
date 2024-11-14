import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientFromColors: ["#FF7701"],
            gradientToColors: ["#FF7701"],
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["#FF7701"], // Line color
          width: 2, // Line thickness
        },
        yaxis: {
          labels: {
            formatter: (value) => {
              return value.toLocaleString(); // Format as locale string
            },
          },
        },
      },
      series: [
        {
          name: "Earnings",
          data: [
            150000, 170000, 180000, 190000, 160000, 170000, 180000, 190000,
            160000, 150000,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="area"
        width="100%"
      />
    );
  }
}

export default LineChart;
