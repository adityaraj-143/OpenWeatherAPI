// import {useEffect} from 'react'
import Axios from 'axios'
import Nav from './sections/Nav';
import Main from './sections/Main';
import { useEffect, useState} from 'react';
import { ForecastInfo, WeatherInfo } from './constants';
import { Appcontext } from './context';

function App() {

  const [weather, setweather] = useState<WeatherInfo>();
  const [forecast, setforecast] = useState<ForecastInfo>();

  const getPost = async () => {
    try {
      const weatherObj = await Axios.post("https://api.openweathermap.org/data/2.5/weather?lat=18.5204&lon=73.8567&units=metric&appid=601708278b44b430e193762b36b11037");
      const forecastObj = await Axios.post("https://api.openweathermap.org/data/2.5/forecast?lat=18.5204&lon=73.8567&cnt=8&units=metric&appid=601708278b44b430e193762b36b11037")
      setweather(weatherObj.data);
      setforecast(forecastObj.data);
    } catch (error) {
      console.log(`message: ${error}`);
    }
  }

  const details = {
    weather,
    forecast,
  }

  useEffect(() => {
    getPost();
  },[]);

  console.log(weather);
  console.log(forecast);
  return (
    <Appcontext.Provider value={details}>
      <div className="flex">
        <div className='hidden md:block'>
          <Nav/>
        </div>
        <div className='flex-1 bg-[#F5F5F5]' >
          <Main/>
        </div>
      </div>
    </Appcontext.Provider>
  );
}

export default App;
