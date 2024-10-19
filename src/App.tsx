// import {useEffect} from 'react'
import Axios from "axios";
import Nav from "./sections/Nav";
import { weatherBg } from "./assets/icons";
import { useEffect, useState } from "react";
import { forecastDayInfo, ForecastInfo, WeatherInfo } from "./constants";
import { Appcontext } from "./context";
import TitleBar from "./sections/TitleBar";
import MainWeather from "./sections/MainWeather";
import Highlights from "./sections/highlights";
import LineGraph from "./sections/LineGraph";
import BarGraph from "./sections/BarGraph";
import Forecast from "./sections/Forecast";

function App() {
  const [weather, setweather] = useState<WeatherInfo>();
  const [forecast, setforecast] = useState<ForecastInfo>();
  const [forecastDay, setforecastDay] = useState<forecastDayInfo>();

  const getPost = async () => {
    try {
      const weatherObj = await Axios.post(
        `https://api.openweathermap.org/data/2.5/weather?lat=18.5204&lon=73.8567&units=metric&appid=601708278b44b430e193762b36b11037`
      );
      const forecastObj = await Axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=18.5204&longitude=73.8567&daily=precipitation_probability_mean&hourly=temperature_2m,precipitation_probability&current=weather_code&timezone=auto&forecast_days=1"
      );
      const forecastDay = await Axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=18.520&longitude=73.8567&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto"
      );
      setweather(weatherObj.data);
      setforecast(forecastObj.data);
      setforecastDay(forecastDay.data);
    } catch (error) {
      console.log(`message: ${error}`);
    }
  };

  const details = {
    weather,
    forecast,
    forecastDay,
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Appcontext.Provider value={details}>
      <div
        style={{ backgroundImage: `url(${weatherBg})` }}
        className="bg-cover  flex"
      >
        <div >
          <Nav />
        </div>
        <div className="flex-1">
          <TitleBar />
          <div className="flex border-t-2 border-[rgba(255,255,255,0.18)]">
            <div className="flex flex-col gap-6 p-6 pr-3">
              <MainWeather />
              <Highlights />
              <LineGraph />
            </div>
            <div className="flex-1 flex flex-col gap-6 p-6 pl-3">
              <BarGraph />
              <Forecast />
            </div>
          </div>
        </div>
      </div>
    </Appcontext.Provider>
  );
}

export default App;
