import { useDetailsContext } from "../context";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartDataLabels,
  Filler,
);

const LineGraph = () => {
  const details = useDetailsContext();

  let labels: string[] = [
    "0AM",
    "3AM",
    "6AM",
    "9AM",
    "12PM",
    "3PM",
    "6PM",
    "9PM",
  ];

  let linedata: number[] = [];
  for (let i = 0; i < 8; i++) {
    if (details.forecast !== undefined)
      linedata[i] = details.forecast?.hourly.temperature_2m[i * 3];
  }

  const minData = Math.min(...linedata);
  const maxData = Math.max(...linedata);
  const average = maxData - minData;

  const data = {
    labels: labels,
    datasets: [
      {
        labels: "my first Datasets",
        data: linedata,
        fill: true,
        tension: 0.1,
        pointRadius: 5,
        borderWidth: 2,
        borderColor: "rgba(8, 116, 175, 0.7)",
        pointBorderWidth: 2,
        pointBorderColor: "rgba(44, 103, 242,0.5)",
        pointBackgroundColor: "#81c5f7",
        backgroundColor: (context: any) => {
          console.log(context.chart.chartArea)
          const {ctx, chartArea: {top, bottom} } = context.chart
          const gradientbg = ctx.createLinearGradient(0,top, 0, bottom)
          gradientbg.addColorStop(0.1, "rgba(63, 144, 189, 0.4)")
          gradientbg.addColorStop(1,"rgba(224,244,255,0.6)")
          return gradientbg;

        }
      },
    ],
  };

  
  return (
    <div className="px-6 py-4 h-[444px] container ">
      <h1 className="text-center">Temperature Graph (°C)</h1>
      <Line 
        className="-mt-4"
        data={data}
        height={400}
        width={960}
        options={{
          responsive: true,
          scales: {
            y: {
              grid: {
                display: false
              },
              min: minData-5,
              display: false,
              ticks: {
                stepSize: average,
              },
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: 'black',
              }
            }
          },
          plugins: {
            datalabels: {
              display: true,
              align: "top",
              color: "black",
            },
          },
        }}
      ></Line>
    </div>
  );
};

export default LineGraph;
