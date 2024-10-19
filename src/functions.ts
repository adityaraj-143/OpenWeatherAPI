import { detailsInfo } from "./constants";
import { weatherConditions } from "./constants";

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
    const setHour = sunset.getHours() % 12;
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

export const getWeatherDesc = (code: number | undefined) => {
  let weatherDesc;
  weatherConditions.forEach((item) => {
    if (item.code === code) {
      weatherDesc = item.description;
    }
  });
  return weatherDesc;
};

export const getWeatherIcon = (code: number | undefined) => {
  let weatherIcon;
  weatherConditions.forEach((item) => {
    if (item.code === code) {
      weatherIcon = item.icon;
    }
  });
  return weatherIcon;
};
