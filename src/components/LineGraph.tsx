import { useDetailsContext } from "../context";
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const LineGraph = () => {
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

  //getting data from 
  let linedata: number[] = []
  for (let i=0; i<8; i++) {
    linedata[i]
  }

  const data = {
    labels: labels,
    datasets: [
        {
            labels: 'my first Datasets',
            data: []
        }
    ]
  }

  return (
    <>

    </>
  )
};

export default LineGraph;
