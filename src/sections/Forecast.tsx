import { useDetailsContext } from "../context";
import { getDetails, getWeatherDesc} from "../functions";
import { dailyinfo } from "../constants/index";

const Forecast = () => {
  const details = useDetailsContext();
  const { days } = getDetails(details);
  const codes = details.forecastDay?.daily.weather_code;
  const tempMax = details.forecastDay?.daily.temperature_2m_max;
  const tempMin = details.forecastDay?.daily.temperature_2m_min;
  const dailyforecast: dailyinfo[] = [];

  if (codes !== undefined && tempMax !== undefined && tempMin !== undefined) {
    for (let i = 0; i < 4; i++) {
      dailyforecast[i] = {
        day: days[i + 1],
        code: codes[i + 1],
        tempMax: tempMax[i + 1],
        tempMin: tempMin[i + 1],
      };
    }
  } 

  return (
    <div className="flex-1 flex flex-col items-center h-[444px] container px-6 py-4 ">
      <h1 className="text-start">4 Days Forecast</h1>
      <ul className="mt-6 flex flex-col gap-7">
        {dailyforecast.map((forecast, index) => (
          <li key={index}>
            <div className="bg-lightblue w-[450px] py-2 flex justify-between items-center rounded-xl border-darkblue border-2">
              <div className="pl-4 w-56">
                <h2>{forecast.day}</h2>
                <p>{getWeatherDesc(forecast.code)}</p>
              </div>
              <div className="flex pr-2 justify-around gap-4 w-40">
                <p className="w-56">
                  &#8593; {forecast.tempMax}°<sup>C</sup>
                </p>
                <p className="w-56">
                  &#8595; {forecast.tempMin}°<sup>C</sup>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className=""></div>
    </div>
  );
};

export default Forecast;
