import { useDetailsContext } from "../context";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartDataLabels
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

  const data = {
    labels: labels,
    datasets: [
      {
        labels: "my first Datasets",
        data: linedata,
        fill: true,
        tension: 0.1,
        pointRadius: 3,
        fillColor: "rgba"

      },
    ],
  };

  return (
    <div className="mt-8 px-6 py-4 rounded-xl backdrop-blur-md bg-[rgba(25,255,255,0.2)] border-2 border-[rgba(255,255,255,0.18)]">
      <Line
        data={data}
        height={400}
        width={960}
        options={{
          responsive: true,
          scales: {
            y: {
              min: 20,
              display: false,
              ticks: {
                stepSize: 2,
              },
            },
            x: {
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
