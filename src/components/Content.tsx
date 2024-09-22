import { bgImg, climateIcon, detailsInfo } from "../constants";
import { useDetailsContext } from "../context";
import { getDetails } from "../functions";
import BarGraph from "./BarGraph";
import Forecast from "./Forecast";
import Highlights from "./highlights";
import LineGraph from "./LineGraph";

const Content = () => {
  const details = useDetailsContext();
  const { days, month, hours, minutes, date } = getDetails(details);

  return (
    <div className="flex">
      <div className="flex flex-col p-5 w-[1000px]">
        <div className="flex">
          <div className="left-0 relative">
            <h1 className=" text-3xl pt-4 pl-8 absolute">
              {details.weather?.name}
            </h1>
            <div className="flex right-0 absolute">
              <img
                className="h-20 w-20"
                src={climateIcon[0].imgUrl}
                alt="climate"
              />
              <p className="pt-6 pr-8 text-xl">
                {details.weather?.main.temp}°<sup>C</sup>
              </p>
            </div>
            <div>
              <img src={bgImg[0].imgUrl} alt="abc" width={620} />
            </div>
          </div>
          <div className="w-30 my-auto ml-14  ">
            <div className="p-5 h-28 pt-8">
              <p>
                {days[0]}, {date.getDate()}
                <sup>th</sup> {month}
              </p>
              <p>
                {hours}: {minutes}
              </p>
              <small></small>
            </div>
            <div className="p-5 pt-8 h-28 mt-16">
              <p>
                Feels like: {details.weather?.main.feels_like}°<sup>C</sup>
              </p>
              <p>{details.weather?.weather[0].description}</p>
            </div>
          </div>
        </div>
        <Highlights />
        <div className="flex-1 ">
          <LineGraph />
        </div>
      </div>
      <div className="flex-1">
        <BarGraph />
        <Forecast />
      </div>
    </div>
  );
};

export default Content;
