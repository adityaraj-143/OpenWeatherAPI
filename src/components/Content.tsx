import { bgImg, climateIcon, detailsInfo } from "../constants";
import { useDetailsContext } from "../context";
import { functions } from "../functions";
import BarGraph from "./BarGraph";
import Forecast from "./Forecast";
import LineGraph from "./LineGraph";

const Content = () => {
  const details = useDetailsContext();
  const date = new Date();
  const [days, daylist, month, riseTime, setTime] = functions(details, date);

  return (
    <div className="flex">
      <div className="bg-green-500 p-5 w-[1000px]">
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
            <div className="p-5 h-28 pt-8 bg-green-300">
              <p>
                {days[0]}, {date.getDate()}
                <sup>th</sup> {month}
              </p>
              <p>
                {date.getHours()}: {date.getMinutes()}
              </p>
              <small></small>
            </div>
            <div className="p-5 pt-8 h-28 bg-green-300 mt-16">
              <p>
                Feels like: {details.weather?.main.feels_like}°<sup>C</sup>
              </p>
              <p>{details.weather?.weather[0].description}</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Today's Highlight</h2>
          <div className="flex gap-14">
            <div className="bg-white w-32 h-20 rounded-xl border-slate-400 border-2">
              <small className="text-start px-2">Precipitation</small>
              <p className="text-center pt-3">
                {details.forecast && 100 * details.forecast?.list[0].pop}%
              </p>
            </div>
            <div className="bg-white w-32 h-20 rounded-xl border-slate-400 border-2">
              <small className="text-start px-2">Humidity</small>
              <p className="text-center pt-3">
                {details.weather && details.weather.main.humidity}%
              </p>
            </div>
            <div className="bg-white w-32 h-20 rounded-xl border-slate-400 border-2">
              <small className="text-start px-2">Wind</small>
              <p className="text-center pt-3">
                {details.weather &&
                  (3.6 * details.weather?.wind.speed).toFixed(2)}
                km/h
              </p>
            </div>
            <div className="bg-white w-32 h-20 rounded-xl border-slate-400 border-2">
              <small className="text-start px-2">Sunrise</small>
              <p className="text-center pt-3">{riseTime} AM</p>
            </div>
            <div className="bg-white w-32 h-20 rounded-xl border-slate-400 border-2">
              <small className="text-start px-2">Sunset</small>
              <p className="text-center pt-3">{setTime} PM</p>
            </div>
          </div>
        </div>
        <div>
          <LineGraph />
        </div>
      </div>
      <div className="bg-pink-400 flex-1">
        <BarGraph />
        <Forecast />
      </div>
    </div>
  );
};

export default Content;
