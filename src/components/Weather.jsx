import React from 'react'
import {FcSearch} from "react-icons/fc"
import clear from "./weatherImg/clear.png"
import clouds from "./weatherImg/clouds.png"
import drizzle from "./weatherImg/drizzle.png"
import mist from "./weatherImg/mist.png"
import humidity from "./weatherImg/humidity.png"
import rain from "./weatherImg/rain.png"
import snow from "./weatherImg/snow.png"
import wind from "./weatherImg/wind.png"


const Weather = () => {
  return (
    <div className=' bgShadow w-full md:w-[50%] flex flex-col justify-center items-center p-3 cursor-pointer'>
      <div className=' flex justify-center items-center gap-3'>
        <input type="text" name="" id="" className=" bg-[#ffffff] rounded-xl outline-none px-3 py-1" placeholder='Search City . . .' />
        <h2 className=' text-2xl'><FcSearch /></h2>
      </div>
      <div className=' flex w-full justify-between px-5 py-3 items-center text-white'>
      <div>
        <h2>City name</h2>
        <h2>temperature</h2>
      </div>
      <div className="">
        <img src="./weatherImg/clear.png" alt="clear" />
        <h2>weather condition</h2>
      </div>
      </div>
    </div>
  )
}

export default Weather
