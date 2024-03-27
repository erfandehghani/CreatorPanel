import { useState } from "react";
import ReactApexChart from "react-apexcharts";
function SolidCharts() {
  const [state, setState] = useState({
    series: [
      {
        name: "سفارشات",
        data: [2, 25, 84, 2, 25, 84, 27, 48],
      },
    ],

    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: true,
        },
      },
      fill: {
        type: "gradient",
        colors: "#758BFD",
        gradient: {
          shadeIndesity: 1,
          opacytiForm: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
      colors: ["#4A68FC"],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
  });
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={270}
      />
    </div>
  );
}

export default SolidCharts;
