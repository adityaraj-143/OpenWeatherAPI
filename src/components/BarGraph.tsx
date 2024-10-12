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
      Bardata[i] = details.forecast?.hourly.precipitation_probability[i * 3];
  }

  const data = {
    labels: labels,
    datasets: [
      {
        labels: "my first dataset",
        data: Bardata,
        borderWidth: 2,
        borderRadius: 4,
        barPercentage: 1,
        categoryPercentage: 0.6,
        backgroundColor: "rgba(228, 177, 240, 0.5)",
        borderColor: "rgba(126, 96, 191, 0.5)"
      },
    ],
  };

  let count = 0;
  if(Bardata !== undefined) {
    Bardata.forEach(element => {
      if(element !== 0) {
        count++;
      }
    });
  }


  if(count === 0) {
    return (
      <div className="flex justify-center align-center px-6 py-4 h-[436.917px] container">
        <h1>No Rain Chances Today!</h1>
      </div>
    )
  }

  return (
    <div className=" px-6 py-4 h-[436.917px] container">
      <h1 className="text-center">Rain Chances</h1>
      <Bar 
        height={200}
        data={data} 
        options={{ 
          indexAxis: "y",
          scales: {
            x: {
              grid: {
                display: false
              },
              display: false
            },
            y: {
              grid: {
                display: false
              },
              border: { 
                display: false
              }
            }
          },
          plugins: {
            datalabels: {
              display: false
            }
          }
         }}>
      </Bar>
    </div>
  );
};

export default BarGraph;
