import React from 'react'
import {FcSearch} from "react-icons/fc"

const Weather = () => {
  return (
    <div className=' bgShadow w-full md:w-[50%] flex flex-col justify-center items-center p-3'>
      <div className=' flex justify-center items-center gap-3'>
        <input type="text" name="" id="" className=" bg-[#ffffff] rounded-xl outline-none px-3 py-1" placeholder='Search City . . .' />
        <h2 className=' text-xl'><FcSearch /></h2>
      </div>
      <div className=' flex w-full justify-between px-5 py-3 items-center text-white'>
      <div>
        <h2>City name</h2>
        <h2>temperature</h2>
      </div>
      <div className="">
        <h2>weather icon</h2>
        <h2>weather condition</h2>
      </div>
      </div>
    </div>
  )
}

export default Weather
