import { useDetailsContext } from "../context";
import { getDetails, weather } from "../functions";
import { dailyinfo } from "../constants/index";

const Forecast = () => {
  const details = useDetailsContext();
  const { days } = getDetails(details);
  const codes = details.forecastDay?.daily.weather_code;
  const tempMax = details.forecastDay?.daily.temperature_2m_max;
  const tempMin = details.forecastDay?.daily.temperature_2m_min;
  const dailyforecast: dailyinfo[] = [];

  if (codes !== undefined && tempMax !== undefined && tempMin !== undefined) {
    for (let i = 0; i < 3; i++) {
      dailyforecast[i] = {
        day: days[i + 1],
        code: codes[i + 1],
        tempMax: tempMax[i + 1],
        tempMin: tempMin[i + 1],
      };
    }
  }

  return (
    <div className="mt-24 flex flex-col gap-4 items-center">
      <ul>
        {dailyforecast.map((forecast, index) => (
          <li className="bg-white w-[400px] my-12 py-2 flex justify-between items-center ">
            <div className="text-center w-40">
              <h2>{forecast.day}</h2>
              <p>{weather(forecast.code)}</p>
            </div>
            <div className="flex justify-around gap-4 w-40">
              <p className="w-56">&#8593; {forecast.tempMax}°</p>
              <p className="w-56">&#8595; {forecast.tempMin}°</p>
            </div>
          </li>
        ))}
      </ul>
      <div className=""></div>
    </div>
  );
};

export default Forecast;
