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
        backgroundColor: "rgba(224,244,255,0.6)",
        borderColor: "rgba(8, 116, 175, 0.7)",
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
      <div className="flex flex-col items-center justify-center h-[426.917px] container">
        <h1 className="text-9xl mb-4">0%</h1>
        <h2 className="text-2xl">Rain chances Today</h2>
      </div>
    )
  }

  return (
    <div className=" px-6 py-4 h-[426.85px] container">
      <h1 className="text-center mt-2 ">Rain Chances</h1>
      <Bar 
        height={230}
        data={data} 
        options={{ 
          responsive: true,
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
              ticks: {
                color: 'black'
              },
              border: { 
                display: false
              }
            },
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
