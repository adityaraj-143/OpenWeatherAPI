import { useDetailsContext } from "../context";
import { getDetails } from "../functions";

const Highlights = () => {
  const details = useDetailsContext();
  const { riseTime, setTime } = getDetails(details);
  return (
    <div className="container px-6 py-4">
      <h2 className="text-center">Today's Highlight</h2>
      <div className="flex px-auto mt-4 justify-center gap-14">
        <div className="bg-white w-32 h-20 rounded-xl border-slate-400 border-2">
          <small className="text-start px-2">Precipitation</small>
          <p className="text-center pt-3">
            {details.forecast && 100 * details.forecast?.current.precipitation}%
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
            {details.weather && (3.6 * details.weather?.wind.speed).toFixed(2)}
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
  );
};

export default Highlights;
