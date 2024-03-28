import { useState } from "react";
import ReactApexChart from "react-apexcharts";
function BarChart() {
  const [state, setState] = useState({
    series: [
      {
        name: " کالای 1",
        data: [44, 55, 41, 67, 22, 43, 45, 32, 12, 24, 11, 29, 13, 51],
      },
      {
        name: " کالای 2",
        data: [13, 23, 20, 8, 13, 27, 41, 67, 22, 43, 45, 14, 7, 34],
      },
      {
        name: " کالای 3 ",
        data: [11, 17, 15, 15, 21, 14, 41, 67, 22, 43, 45, 14, 7, 34],
      },
      {
        name: " کالای 4 ",
        data: [21, 7, 25, 13, 22, 8, 41, 67, 22, 43, 45, 14, 7, 34],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
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
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
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
