// import {useEffect} from 'react'
import Axios from 'axios'
import Nav from './sections/Nav';
import Main from './sections/Main';
import { useEffect, useState } from 'react';
import { WeatherInfo } from './constants';

function App() {

  // useEffect(() => {
  //   const intervalId = setInterval(getPost, 5000);
  //   return () => clearInterval(intervalId);
  // },[]);

  const [weather, setweather] = useState<WeatherInfo | undefined>();

  const getPost = async () => {
    try {
      const weatherObj = await Axios.post("https://api.openweathermap.org/data/2.5/weather?lat=18.5204&lon=73.8567&appid=601708278b44b430e193762b36b11037&units=metric");
      const forecastObj = await Axios.post("https://api.openweathermap.org/data/2.5/forecast?lat=18.5204&lon=73.8567&cnt=5&appid=601708278b44b430e193762b36b11037")
      setweather(weatherObj.data);
      const forecast = forecastObj.data;
      console.log(forecast)
    } catch (error) {
      console.log(`message: ${error}`)
    }
  }

  getPost();

  console.log(weather)

  return (
    <div className="flex">
      <div className='hidden md:block'>
        <Nav/>
      </div>
      <div className='flex-1 bg-[#F5F5F5]' >
        <Main/>
      </div>
    </div>
  );
}

export default App;
