import React, { useEffect, useState } from 'react'
import SubNavBar from '../components/SubNavBar'
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import CurrencySelect from '../components/CurrencySelect';


const CurrencyExchange = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("MMK")
  const [to, setTo] = useState("USD")
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const currencySwap = () => {
    setFrom(to)
    setTo(from)
  }
  const convert = async () => {
    const API_KEY = "ca2b71be1ce48ad5b0ef8e91"
    // console.log(API_KEY);

    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}`
    if (isLoading) {
      setIsLoading(true)
      // console.log("Loading...");
    }
    try {
      const res = await fetch(API_URL)
      if (!res.ok) {
        throw Error("Something went wrong")
      }
      const data = await res.json()
      // console.log(data);

      const rate = (data.conversion_rate * amount).toFixed(2)
      setResult(`${amount} ${from} = ${rate} ${to}`);
    } catch (err) {
      setResult(0)
      console.log(err);

    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => { convert }, [from, amount])
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
              {result !== "" ? (
                <h1 className=' font-semibold font-mono tracking-wider text-sm'>{result}</h1>
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
                <CurrencySelect id={"From"} selectedCurrency={from} handleCurrency={e => setFrom(e.target.value)} />
                <button className=' bg-white/30 border border-white rounded-full p-2 shadow-md' onClick={currencySwap}><HiOutlineSwitchHorizontal size={20} /></button>
                <CurrencySelect id={"To"} selectedCurrency={to} handleCurrency={e => setTo(e.target.value)} />
              </div>
            </div>
            <button onClick={convert} className={` bg-white/80 border border-white shadow-md rounded-lg px-3 py-2 w-full flex justify-center items-center font-semibold font-mono tracking-wider text-lg ${isLoading ? " pointer-events-none" : ""}`}>Convert</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrencyExchange
