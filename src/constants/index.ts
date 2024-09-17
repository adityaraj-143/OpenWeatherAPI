import {home, calender, location, compass, setting, notification, user, climate, puneBg} from '../assets/icons/index';
import { useDetailsContext } from '../context';



export const navMenu = [
    {
        imgurl: home,
        text: "Home" 
    },
    {
        imgurl: compass,
        text: "Forecast" 
    },
    {
        imgurl: location,
        text: "Locations" 
    },
    {
        imgurl: calender,
        text: "Calender" 
    },
    {
        imgurl: setting,
        text: "Settings" 
    }
]


export const titleMenu = [
    {
        imgurl: notification,
        href: "#notifications"
    },
    {
        imgurl: user,
        href: "account"
    }
]

export const climateIcon = [
  {
    imgUrl: climate,
  },
]

export const bgImg = [
  {
    imgUrl: puneBg,
  }
]

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
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}


export interface detailsInfo {
  weather: WeatherInfo | undefined;
  forecast: ForecastInfo | undefined;
  forecastDay: forecastDayInfo | undefined;
}

export const Highlights = [
  {
    label: "Precipitation",
    // value: details.forecast?.list[0].pop,
  }
]

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
