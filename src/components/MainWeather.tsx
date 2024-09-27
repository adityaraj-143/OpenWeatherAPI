import { climateIcon } from "../constants";
import { useDetailsContext } from "../context";
import { getDetails, weather } from "../functions";

const MainWeather = () => {
  const details = useDetailsContext();
  const { days, month, hours, minutes, datestr } = getDetails(details);
  
  return (
    <div className="flex rounded-xl backdrop-blur-md bg-[rgba(25,255,255,0.2)] border-2 border-[rgba(255,255,255,0.18)] justify-between px-6 py-4">
      <div className="">
        <h1 className="text-6xl">{details.weather?.name}</h1>
        <p>
          {days[0]}, {datestr} {month}
        </p>
        <div>
          <img
            src={climateIcon[0].imgUrl}
            alt="climate"
            width={220}
            height={101}
            className="-mb-14 -ml-10"
          />
          <h1 className="pl-2 text-2xl">{details.weather?.weather[0].description}</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-9xl">{details.weather && Math.floor(details.weather?.main.temp)}<sup>&deg;C</sup></h1>
        <p>{details.weather && Math.floor(details.weather.main.temp_max)}<sup>&deg;C</sup> / {details.weather && Math.floor(details.weather?.main.temp_min)}<sup>&deg;C</sup></p>
      </div>
    </div>
  );
};

export default MainWeather;
