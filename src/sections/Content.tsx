import { useDetailsContext } from "../context";
import { getDetails } from "../functions";
import BarGraph from "../components/BarGraph";
import Forecast from "../components/Forecast";
import Highlights from "../components/highlights";
import LineGraph from "../components/LineGraph";
import MainWeather from "../components/MainWeather";

const Content = () => {
  const details = useDetailsContext();
  const { days, month, hours, minutes, date } = getDetails(details);

  return (
    <div className="flex">
      <div className="flex flex-col p-5 w-[1000px]">
        <MainWeather />
        <Highlights />
        <LineGraph />
      </div>
      <div className="flex-1 p-5">
        <BarGraph />
        <Forecast />
      </div>
    </div>
  );
};

export default Content;
