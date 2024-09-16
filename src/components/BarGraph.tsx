import {Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { useDetailsContext } from '../context';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const BarGraph = () => {

    const details = useDetailsContext();
    let currenthour = 0
    if (details.forecast !== undefined) {
      currenthour = new Date(details.forecast?.list[0].dt_txt).getHours();
      currenthour = currenthour%12;
      console.log(currenthour)
    }
    let labels: number[] = [];
    for (let i=0; i<8; i++) {
      labels[i] = currenthour+i*3;
    }

    let Bardata: number[] = []
    for (let i=0; i<8; i++) {
      if(details.forecast !== undefined)
      Bardata[i] = 100 * details.forecast?.list[i].pop;
    }

    const data = {
        labels: labels,
        datasets: [
            {
                
                labels: "my first dataset",
                data: Bardata
            }
        ]
    }


  return (
    <Bar data={data} options={{indexAxis: 'y'}} >
      
    </Bar>
  )
}

export default BarGraph
