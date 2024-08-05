import React, { useState } from 'react'
import SubNavBar from '../components/SubNavBar'
import { HiOutlineSwitchHorizontal } from "react-icons/hi";


const CurrencyExchange = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("MMK")
  const [to, setTo] = useState("USD")
  const [result, setResult] = useState(0)
  return (
    <>
      <SubNavBar title="currency converter" />
      <div className=" min-h-[calc(100vh-150px)] flex w-full justify-center items-center">
        <div className=" min-h-[calc(100vh-220px)] bgShadow w-[30%] m-5 p-10">
          <div className=" grid grid-flow-col auto-cols-max">
            
          </div>
        </div>
        <div className="  bgShadow w-[25%] m-5 py-3">
          <div className=" grid grid-rows-4 grid-flow-col gap-16 p-10">
            <div className=" bg-white/30 border border-white shadow-md rounded-lg px-3 py-2 w-full flex justify-center items-center">
              {result !== 0 ? (
                <h1 className=' font-semibold font-mono tracking-wider text-sm'>{amount} {from} = {result} {to}</h1>
              ) : (
                <h1 className=' font-semibold font-mono tracking-wider text-sm'>Enter Amount To Convert Currency</h1>
              )}
            </div>
            <div className=" row-span-2 grid grid-rows-2 grid-flow-col gap-3">
              <div className=" flex flex-col gap-2">
                <label htmlFor='amount' className=' font-semibold'>Enter Amount</label>
                <input type="number" name="amount" id="amount" className=' outline-none px-3 py-1 bg-white/30 border border-white shadow-md rounded-lg' value={amount} onChange={(e) => setAmount(e.target.value)} />
              </div>
              <div className=" flex flex-row justify-between items-end w-full">
                <div className="flex flex-col w-[35%] gap-2">
                  <label htmlFor="from" className=' font-semibold'>From</label>
                  <select type="text" name="from" id="from" className=' outline-none px-3 py-1 bg-white/30 border border-white shadow-md rounded-lg font-semibold font-mono tracking-wider text-lg' value={from} onChange={(e) => setFrom(e.target.value)}>
                    <option value="MMK">MMK</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="JPY">JPY</option>
                  </select>
                </div>
                <button className=' bg-white/30 border border-white rounded-full p-2 shadow-md pointer-events-none'><HiOutlineSwitchHorizontal size={20} /></button>
                <div className="flex flex-col w-[35%] gap-2">
                  <label htmlFor="to" className=' font-semibold'>To</label>
                  <select type="text" name="from" id="from" className=' outline-none px-3 py-1 bg-white/30 border border-white shadow-md rounded-lg font-semibold font-mono tracking-wider text-lg' value={to} onChange={(e) => setTo(e.target.value)}>
                    <option value="MMK">MMK</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="JPY">JPY</option>
                  </select>
                </div>
              </div>
            </div>
            <button className=" bg-white/80 border border-white shadow-md rounded-lg px-3 py-2 w-full flex justify-center items-center font-semibold font-mono tracking-wider text-lg">Convert</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrencyExchange
