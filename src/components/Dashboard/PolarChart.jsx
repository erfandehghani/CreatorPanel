import { useState } from "react";
import ReactApexChart from "react-apexcharts";
function PolarChart() {
  const [state, setState] = useState({
    series: [42, 47, 52, 58],
    options: {
      chart: {
        width: 380,
        type: "polarArea",
      },
      labels: ["بهار", "تابستان", "پاییز", "زمستان"],
      fill: {
        opacity: 1,
        colors: ["#00ff2f", "#f6ff00", "#fe6a00", "#3f8ad9"],
      },
      stroke: {
        width: 1,
        colors: ["#00ff2f", "#f6ff00", "#fe6a00", "#3f8ad9"],
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },

      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "bottom",
        horizontalAlign: "center",
        floating: false,
        fontSize: "14px",
        fontWeight: 500,
        labels: {
          colors: undefined,
          useSeriesColors: false,
        },
        markers: {
          width: 10,
          height: 10,
          strokeColor: "#fff",
          fillColors: ["#00ff2f", "#f6ff00", "#fe6a00", "#3f8ad9"],
          radius: 10,
          offsetX: 0,
          offsetY: 0,
        },
      },
    },
  });
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="polarArea"
        height={270}
      />
    </div>
  );
}

export default PolarChart;
