import React, { useEffect, useState } from 'react'
import { FcSearch } from "react-icons/fc"
import clear from "./weatherImg/clear.png"
import clouds from "./weatherImg/clouds.png"
import drizzle from "./weatherImg/drizzle.png"
import mist from "./weatherImg/mist.png"
import humidity from "./weatherImg/humidity.png"
import rain from "./weatherImg/rain.png"
import snow from "./weatherImg/snow.png"
import wind from "./weatherImg/wind.png"
import axios from 'axios'

const api = {
  key: "29be3ab5d8a584353d178ff602fdcfaa",
  base: "https://api.openweathermap.org/data/2.5/"
}

const weatherImages = {
  Clear: clear,
  Clouds: clouds,
  Drizzle: drizzle,
  Mist: mist,
  Rain: rain,
  Snow: snow,
  Wind: wind,
  Humidity: humidity
};

const Weather = () => {

  const [location, setLocation] = useState('myanmar')
  const [weatherData, setWeatherData] = useState(null)
  const [temp, setTemp] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    searchWeather()
  }, [])

  const searchWeather = () => {
    fetch(`${api.base}weather?q=${location}&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod !== 200) {
          setError(result.message);
          setWeatherData(null);
        } else {
          setWeatherData(result);
          const normalTemp = result.main.temp - 273.15;
          const calTemp = Math.floor(normalTemp);
          setTemp(calTemp);
          setError(""); // Clear any previous errors
        }
      })
      .catch(() => {
        setError("An error occurred while fetching data.");
        setWeatherData(null);
      });
  }

  const goSearchWeather = () => {
    searchWeather()
    console.log(weatherData);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      goSearchWeather();
    }
  };

  const getWeatherImage = (weatherMain) => {
    return weatherImages[weatherMain] || clear;
  };


  return (
    <div className=' w-full md:w-[50%] flex flex-col justify-center items-center p-3 cursor-pointer bgShadow'>
      <div className=' flex justify-center items-center gap-3'>
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} onKeyPress={handleKeyPress} className=" bg-[#ffffff] rounded-xl outline-none px-3 py-1 city-input" placeholder='Search City . . .' />
        <button className=' text-2xl' onClick={goSearchWeather}><FcSearch /></button>
      </div>
      {error ? (
        <div className=" flex w-[80%] justify-between px-5 py-3 items-center text-white">The country name is not exit !! </div>
      ) : (
        <div className=' flex w-[80%] justify-between px-5 py-3 items-center text-white'>
          {weatherData ? (
            <div>
              <h2 className=' font-semibold text-sm tracking-widest'>{weatherData.name}</h2>
              {weatherData.main ? (
                <h2 className=' font-semibold text-4xl tracking-wider'>{temp}&deg;C</h2>
              ) : (
                <h2 className=' font-semibold text-4xl tracking-wider'>Not found</h2>
              )}
            </div>
          ) : (
            <h2 className=' uppercase font-semibold tracking-wider'>Unfound</h2>
          )}
          <div className=" flex flex-col justify-center items-center">
            {weatherData ? (
              <>
                <img src={getWeatherImage(weatherData.weather[0].main)} alt="clear" className=' w-10' />
                <h2 className=' uppercase font-semibold tracking-wider'>{weatherData.weather[0].main}</h2>
              </>
            ) : (
              <h2 className=' uppercase font-semibold tracking-wider'>Unfound</h2>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Weather
