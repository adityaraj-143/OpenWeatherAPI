import { useDetailsContext } from "../context";
import { getDetails, getWeatherDesc, getWeatherIcon} from "../functions";

const MainWeather = () => {
  const details = useDetailsContext();
  const { days, month, datestr } = getDetails(details);
  const code = details.forecast?.current.weather_code;
  console.log(code)
  
  return (
    <div className="flex container justify-between px-6 py-4">
      <div className="">
        <h1 className="text-6xl">{details.weather?.name}</h1>
        <p>
          {days[0]}, {datestr} {month}
        </p>
        <div className="">
          <img
            src={getWeatherIcon(code)}
            alt="climate"
            width={120}
            height={101}
            className="-mb-2 -ml-5 "
          />
          <h1 className="text-2xl">{getWeatherDesc(code)}</h1>
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
