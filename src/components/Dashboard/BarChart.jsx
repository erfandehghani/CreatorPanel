import { useState } from "react";
import ReactApexChart from "react-apexcharts";
function BarChart() {
  const [state, setState] = useState({
    series: [
      {
        name: "مجموع فروش",
        data: [12, 10, 25, 34, 26, 64, 1, 0, 99, 52, 21, 34, 49, 82],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        // formatter: function (val) {
        //   return val + "%";
        // },
        // offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        type: "datetime",
        categories: [
          "01/01/2011 GMT",
          "01/02/2011 GMT",
          "01/03/2011 GMT",
          "01/04/2011 GMT",
          "01/05/2011 GMT",
          "01/06/2011 GMT",
          "01/07/2011 GMT",
          "01/08/2011 GMT",
          "01/09/2011 GMT",
          "01/10/2011 GMT",
          "01/11/2011 GMT",
          "01/12/2011 GMT",
          "01/13/2011 GMT",
          "01/14/2011 GMT",
        ],
        position: "top",
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          // formatter: function (val) {
          //   return val + "%";
          // },
        },
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={270}
      />
    </div>
  );
}

export default BarChart;
