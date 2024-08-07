import React from 'react'



const CurrencySelect = ({ selectedCurrency, handleCurrency, id,currencyCodes }) => {

    const countryCode = selectedCurrency.substring(0, 2)

    return (
        <div className="flex flex-col w-[40%] gap-2 ">
            <label htmlFor={id} className=' font-semibold'>{id}</label>
            <div className=" bg-white/30 border border-white shadow-md rounded-lg font-semibold font-mono tracking-wider text-lg flex items-center px-2">
                <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt="" className=' w-8' />
                <select type="text" name={id} id={id} className=' outline-none px-3 py-1 bg-transparent' value={selectedCurrency} onChange={handleCurrency}>
                    {currencyCodes.map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}


export default CurrencySelect