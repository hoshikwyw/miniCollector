import React, { useEffect, useState } from 'react'
import SubNavBar from '../components/SubNavBar'
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import CurrencySelect from '../components/CurrencySelect';
import CurrencyShowcase from '../components/CurrencyShowcase';


const currencyCodes = [
  "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
  "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
  "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
  "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
  "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
  "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
  "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
  "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
  "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
  "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
  "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
  "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
  "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
  "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
  "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
  "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW",
  "ZWL"
];

const CurrencyExchange = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("MMK")
  const [to, setTo] = useState("USD")
  const [result, setResult] = useState("")
  const [latestCurrency, setLatestCurrency] = useState([])
  console.log(latestCurrency);

  const [isLoading, setIsLoading] = useState(false)

  const currencySwap = () => {
    setFrom(to)
    setTo(from)
  }
  const convert = async () => {
    const API_KEY = "ca2b71be1ce48ad5b0ef8e91"
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}`
    if (isLoading) {
      setIsLoading(true)
    }
    try {
      const res = await fetch(API_URL)
      if (!res.ok) {
        throw Error("Something went wrong")
      }
      const data = await res.json()
      const rate = (data.conversion_rate * amount).toFixed(2)
      setResult(`${amount} ${from} = ${rate} ${to}`);
    } catch (err) {
      setResult(0)
      console.log(err);
    } finally {
      setIsLoading(false)
    }
  }
  const latest = async () => {
    const API_KEY = "ca2b71be1ce48ad5b0ef8e91"
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`
    if (isLoading) {
      setIsLoading(true)
    }
    try {
      const res = await fetch(API_URL)
      if (!res.ok) {
        throw Error("Something went wrong")
      }
      const data = await res.json()
      setLatestCurrency(data.conversion_rates)
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => { convert() }, [amount, from, to])
  useEffect(() => { latest() }, [from])
  return (
    <>
      <SubNavBar title="currency converter" />
      <div className=" min-h-[calc(100vh-150px)] flex w-full justify-center items-center">
        <div className=" h-[calc(100vh-220px)] bgShadow w-[30%] m-5 overflow-scroll scrollable-hidden-scrollbar">
          <div className=" flex flex-col gap-2 p-5">
            <h1 className=' font-semibold'>Latest Currency</h1>
            <CurrencyShowcase currencyCodes={currencyCodes} selectedCurrency={from} latestCurrency={latestCurrency} />
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
                <CurrencySelect id={"From"} selectedCurrency={from} handleCurrency={e => setFrom(e.target.value)} currencyCodes={currencyCodes} />
                <button className=' bg-white/30 border border-white rounded-full p-2 shadow-md' onClick={currencySwap}><HiOutlineSwitchHorizontal size={20} /></button>
                <CurrencySelect id={"To"} selectedCurrency={to} handleCurrency={e => setTo(e.target.value)} currencyCodes={currencyCodes} />
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
