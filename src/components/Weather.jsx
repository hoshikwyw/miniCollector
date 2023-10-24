import React, { useState } from 'react'
import {FcSearch} from "react-icons/fc"
import clear from "./weatherImg/clear.png"
import clouds from "./weatherImg/clouds.png"
import drizzle from "./weatherImg/drizzle.png"
import mist from "./weatherImg/mist.png"
import humidity from "./weatherImg/humidity.png"
import rain from "./weatherImg/rain.png"
import snow from "./weatherImg/snow.png"
import wind from "./weatherImg/wind.png"
import { useGetDataQuery } from '../services/weather'


const Weather = () => {

  const [location, setLocation] = useState('Myanmar')
 console.log(location);  
  const {data, error, isLoading} = useGetDataQuery(location)
  console.log(data);

  return (
    <div className=' bgShadow w-full md:w-[50%] flex flex-col justify-center items-center p-3 cursor-pointer'>
      <div className=' flex justify-center items-center gap-3'>
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} className=" bg-[#ffffff] rounded-xl outline-none px-3 py-1 city-input" placeholder='Search City . . .' />
        <button className=' text-2xl' onClick={() => useGetDataQuery(location)}><FcSearch /></button>
      </div>
      <div className=' flex w-[80%] justify-between px-5 py-3 items-center text-white'>
      <div>
        <h2 className=' font-semibold text-sm tracking-widest'>Yangon</h2>
        <h2 className=' font-semibold text-4xl tracking-wider'>27°C</h2>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <img src={clear} alt="clear" className=' w-10' />
        <h2 className=' uppercase font-semibold tracking-wider'>clear</h2>
      </div>
      </div>
    </div>
  )
}

export default Weather
