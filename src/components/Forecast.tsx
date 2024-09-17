import { useDetailsContext } from "../context";
import { functions, weather } from "../functions";

const Forecast = () => {

    const details = useDetailsContext();
    const date = new Date();
    const [days] = functions(details, date);
    const codes = details.forecastDay?.daily.weather_code;

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="bg-white w-[400px] flex justify-between items-center ">
        <div className="text-center w-40">
          <h2>{days[1]}</h2>
          <p>{codes && weather(codes[1])}</p>
        </div>
        <div className="flex gap-4 w-40">
          <p> &#8593; {details.forecastDay?.daily.temperature_2m_max[1]}°</p>
          <p> &#8595; {details.forecastDay?.daily.temperature_2m_min[1]}°</p>
        </div>
      </div>
      <div className="bg-white w-[400px] flex justify-between items-center ">
        <div className="text-center w-40">
          <h2>{days[2]}</h2>
          <p>{codes && weather(codes[2])}</p>
        </div>
        <div className="flex gap-4 w-40">
          <p> &#8593; {details.forecastDay?.daily.temperature_2m_max[2]}°</p>
          <p> &#8595; {details.forecastDay?.daily.temperature_2m_min[2]}°</p>
        </div>
      </div>
      <div className="bg-white w-[400px] flex justify-between items-center ">
        <div className="text-center w-40">
          <h2>{days[3]}</h2>
          <p>{codes && weather(codes[3])}</p>
        </div>
        <div className="flex gap-4 w-40">
          <p> &#8593; {details.forecastDay?.daily.temperature_2m_max[3]}°</p>
          <p> &#8595; {details.forecastDay?.daily.temperature_2m_min[3]}°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
