import React from 'react'

const CurrencyShowcase = ({ selectedCurrency, latestCurrency }) => {

    const countryCode = selectedCurrency.substring(0, 2)
    return (
        <div className=' flex flex-col gap-2 cursor-pointer'>
            {Object.entries(latestCurrency).slice(1).map(([key, value]) => {
                const targetCountryCode = key.substring(0, 2)
                return (
                    <div key={key} className=' bg-white/30 border border-white shadow-md rounded-lg font-semibold font-mono tracking-wider text-lg py-1 px-3 flex items-center'>
                        <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt="" className=' w-6 h-8' />
                        <p className=' text-sm font-semibold'>1 {selectedCurrency} = </p>
                        <img src={`https://flagsapi.com/${targetCountryCode}/flat/64.png`} alt="" className=' w-6 h-8' />
                        <p className=' text-sm font-semibold'>{value} {key}</p>
                    </div>
                )
            }
            )}


        </div>
    )
}

export default CurrencyShowcase