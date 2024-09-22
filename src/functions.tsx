import { detailsInfo } from "./constants";

const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const codeslist = [
  0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77,
  80, 81, 82, 85, 86, 95, 96, 99,
];

const descriptions = [
  "Clear sky",
  "Mainly clear",
  "Partly cloudy",
  "Overcast",
  "Fog",
  "Depositing rime fog",
  "Drizzle: Light intensity",
  "Drizzle: Moderate intensity",
  "Drizzle: Dense intensity",
  "Freezing Drizzle: Light intensity",
  "Freezing Drizzle: Dense intensity",
  "Rain: Slight intensity",
  "Rain: Moderate intensity",
  "Rain: Heavy intensity",
  "Freezing Rain: Light intensity",
  "Freezing Rain: Heavy intensity",
  "Snow fall: Slight intensity",
  "Snow fall: Moderate intensity",
  "Snow fall: Heavy intensity",
  "Snow grains",
  "Rain showers: Slight intensity",
  "Rain showers: Moderate intensity",
  "Rain showers: Violent intensity",
  "Snow showers: Slight intensity",
  "Snow showers: Heavy intensity",
  "Thunderstorm: Slight or moderate",
  "Thunderstorm with slight hail",
  "Thunderstorm with heavy hail",
];

export const getDetails = (details: detailsInfo) => {
  const date = new Date()
  const days = dayList.slice(date.getDay());
  const month = monthList[date.getMonth()];
  let riseTime: string = "";
  let setTime: string = "";
  let hours = "0" + date.getHours().toString();
  hours = hours.substring(hours.length - 2)
  let minutes = "0" + date.getMinutes().toString();
  minutes = minutes.substring(minutes.length - 2);

  if (
    details.weather?.sys.sunrise !== undefined &&
    details.weather?.sys.sunset !== undefined
  ) {
    const sunrise = new Date(details.weather?.sys.sunrise * 100);
    const sunset = new Date(details.weather?.sys.sunset * 100);
    const riseHour = sunrise.getHours().toString();
    const riseMinutes = "0" + sunrise.getMinutes().toString();
    riseTime = riseHour + ": " + riseMinutes.substring(riseMinutes.length - 2);
    const setHour = sunset.getHours().toString();
    const setMinutes = "0" + sunset.getMinutes().toString();
    setTime = setHour + ": " + setMinutes.substring(riseMinutes.length - 2);
  }

  return { days, month, riseTime, setTime, hours, minutes, date };
};

export function weather(code: number): string {
  const index = codeslist.indexOf(code);
  const weatherDesc = descriptions[index];
  return weatherDesc;
}
