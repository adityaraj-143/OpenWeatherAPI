import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { useDetailsContext } from "../context";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const BarGraph = () => {
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

  let Bardata: number[] = [];
  for (let i = 0; i < 8; i++) {
    if (details.forecast !== undefined)
      Bardata[i] =
        details.forecast?.hourly.precipitation_probability[i * 3];
  }

  const data = {
    labels: labels,
    datasets: [
      {
        labels: "my first dataset",
        data: Bardata,
      },
    ],
  };

  return <Bar data={data} options={{ indexAxis: "y" }}></Bar>;
};

export default BarGraph;
