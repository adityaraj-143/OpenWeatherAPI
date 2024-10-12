import { highlights } from "../constants";
import { useDetailsContext } from "../context";
import { getDetails } from "../functions";

const Highlights = () => {
  const details = useDetailsContext();
  const { riseTime, setTime } = getDetails(details);
  let highlight: highlights[] = [];

  if (details.forecast !== undefined && details.weather) {
    highlight = [
      {
        name: "Precipitation",
        detail: `${details.forecast.daily.precipitation_probability_mean} %`,
      },
      {
        name: "Humidity",
        detail: `${details.weather.main.humidity} %`,
      },
      {
        name: "Wind",
        detail: `${(3.6 * details.weather?.wind.speed).toFixed(2)} km/h`,
      },
      {
        name: "Sunrise",
        detail: `${riseTime} AM`,
      },
      {
        name: "Sunset",
        detail: `${setTime} PM`,
      },
    ];
  }

  return (
    <div className="container px-6 py-4">
      <h2 className="text-center">Today's Highlight</h2>
        <ul className="flex justify-center gap-14 mt-4">
          {highlight.map((item, index) => (
            <li key={index}>
              <div className="bg-white w-32 h-20 rounded-xl border-slate-400 border-2">
                <small className="text-start px-2">{item.name}</small>
                <p className="text-center pt-3">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Highlights;
