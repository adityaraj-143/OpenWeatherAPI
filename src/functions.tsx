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
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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
  "Light drizzle",
  "Moderate drizzle",
  "Dense drizzle",
  "Drizzle drizzle",
  "Freezing drizzle",
  "Slight rain",
  "Moderate rain",
  "Heavy rain",
  "Light freezing rain",
  "Heavy freezing rain",
  "Slight snow fall",
  "Moderate snow fall",
  "Heavy snow fall",
  "Snow grains",
  "Slight rain showers",
  "Moderate rain showers",
  "Violent rain showers",
  "Slight snow showers",
  "Heavy snow showers",
  "Slight thunderstorm",
  "Slight hail thunderstorm",
  "Heavy hail thunderstorm",
];

export const getDetails = (details: detailsInfo) => {
  const date = new Date();

  let currntDay = date.getDay();
  const days: string[] = [];
  for (let i = 0; i < 5; i++) {
    days[i] = dayList[currntDay];
    currntDay = (currntDay + 1) % 7;
  }

  const month = monthList[date.getMonth()];

  let riseTime: string = "";
  let setTime: string = "";
  let hours = "0" + date.getHours().toString();
  hours = hours.substring(hours.length - 2);
  let minutes = "0" + date.getMinutes().toString();
  minutes = minutes.substring(minutes.length - 2);

  if (
    details.weather?.sys.sunrise !== undefined &&
    details.weather?.sys.sunset !== undefined
  ) {
    const sunrise = new Date(details.weather?.sys.sunrise * 1000);
    const sunset = new Date(details.weather?.sys.sunset * 1000);
    console.log(sunrise, sunset);
    
    const riseHour = sunrise.getHours().toString();
    const riseMinutes = "0" + sunrise.getMinutes().toString();
    riseTime = riseHour + ": " + riseMinutes.substring(riseMinutes.length - 2);
    const setHour = (sunset.getHours() % 12);
    const setMinutes = "0" + sunset.getMinutes().toString();
    setTime = setHour + ": " + setMinutes.substring(riseMinutes.length - 2);
  }

  function ordinal_suffix_of() {
    let j = date.getDate() % 10,
      k = date.getDate() % 100;
    if (j === 1 && k !== 11) {
      return date.getDate() + "st";
    }
    if (j === 2 && k !== 12) {
      return date.getDate() + "nd";
    }
    if (j === 3 && k !== 13) {
      return date.getDate() + "rd";
    }
    return date.getDate() + "th";
  }

  const datestr = ordinal_suffix_of();

  return { days, month, riseTime, setTime, hours, minutes, date, datestr };
};

export function weather(code: number): string {
  const index = codeslist.indexOf(code);
  const weatherDesc = descriptions[index];
  return weatherDesc;
}
