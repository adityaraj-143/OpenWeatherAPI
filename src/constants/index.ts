import {
  home,
  calender,
  location,
  compass,
  setting,
  notification,
  user,
  climate,
} from "../assets/icons/index";

export const navMenu = [
  {
    imgurl: home,
    text: "Home",
    alt: "home",
    href: "home"
  },
  {
    imgurl: compass,
    text: "Forecast",
    alt: "forcast",
    href: "forecast"
  },
  {
    imgurl: location,
    text: "Locations",
    alt: "locations",
    href: "locations"
  },
  {
    imgurl: calender,
    text: "Calender",
    alt: "calender",
    href: "calender"
  },
  {
    imgurl: setting,
    text: "Settings",
    alt: "settings",
    href: "settings"
  },
];

export const weatherConditions = [
  {
    code: 0,
    description: "Clear sky",
    icon: climate.clearSky,
  },
  {
    code: 1,
    description: "Mainly clear",
    icon: climate.slightCloudy,
  },
  {
    code: 2,
    description: "Partly cloudy",
    icon: climate.mediumCloudy,
  },
  {
    code: 3,
    description: "Overcast",
    icon: climate.overcast,
  },
  {
    code: 45,
    description: "Fog",
    icon: climate.fog,
  },
  {
    code: 48,
    description: "Depositing rime fog",
    icon: climate.frost,
  },
  {
    code: 51,
    description: "Light drizzle",
    icon: climate.drizzle,
  },
  {
    code: 53,
    description: "Moderate drizzle",
    icon: climate.drizzle,
  },
  {
    code: 55,
    description: "Dense drizzle",
    icon: climate.drizzle,
  },
  {
    code: 56,
    description: "Slight freezing drizzle",
    icon: climate.freezingDrizzle,
  },
  {
    code: 57,
    description: "Heavy freezing drizzle",
    icon: climate.freezingDrizzle,
  },
  {
    code: 61,
    description: "Slight rain",
    icon: climate.slightRain,
  },
  {
    code: 63,
    description: "Moderate rain",
    icon: climate.heavyRain,
  },
  {
    code: 65,
    description: "Heavy rain",
    icon: climate.heavyRain,
  },
  {
    code: 66,
    description: "Light freezing rain",
    icon: climate.freezingRain,
  },
  {
    code: 67,
    description: "Heavy freezing rain",
    icon: climate.freezingRain,
  },
  {
    code: 71,
    description: "Slight snow fall",
    icon: climate.slightSnow,
  },
  {
    code: 73,
    description: "Moderate snow fall",
    icon: climate.mediumSnow,
  },
  {
    code: 75,
    description: "Heavy snow fall",
    icon: climate.heavySnow,
  },
  {
    code: 77,
    description: "Snow grains",
    icon: climate.snowGrains,
  },
  {
    code: 80,
    description: "Slight rain showers",
    icon: climate.slightRainShower,
  },
  {
    code: 81,
    description: "Moderate rain showers",
    icon: climate.mediumRainShower,
  },
  {
    code: 82,
    description: "Violent rain showers",
    icon: climate.heavyRainShower,
  },
  {
    code: 85,
    description: "Slight snow showers",
    icon: climate.slightSnowShower,
  },
  {
    code: 86,
    description: "Heavy snow showers",
    icon: climate.heavySnowShower,
  },
  {
    code: 95,
    description: "Slight thunderstorm",
    icon: climate.slightThunderstorm,
  },
  {
    code: 96,
    description: "Slight hail thunderstorm",
    icon: climate.thunderstorm,
  },
  {
    code: 99,
    description: "Heavy hail thunderstorm",
    icon: climate.thunderstorm,
  },
];

export const titleMenu = [
  {
    imgurl: notification,
    href: "#notifications",
    alt: "notification"
  },
  {
    imgurl: user,
    href: "account",
    alt: "acco"
  },
];

export const climateIcon = [
  {
    imgUrl: climate,
  },
];

export interface WeatherInfo {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ForecastInfo {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    weather_code: string;
  };
  current: {
    time: string;
    interval: number;
    weather_code: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    precipitation_probability: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation_probability: number[];
  };
  daily_units: {
    time: string;
    precipitation_probability_mean: string;
  };
  daily: {
    time: string[];
    precipitation_probability_mean: number[];
  };
}


export interface dailyinfo {
  day: string;
  code: number;
  tempMin: number;
  tempMax: number;
}

export interface detailsInfo {
  weather: WeatherInfo | undefined;
  forecast: ForecastInfo | undefined;
  forecastDay: forecastDayInfo | undefined;
}

export interface highlights {
  name: string;
  detail: string;
}

export interface forecastDayInfo {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}
