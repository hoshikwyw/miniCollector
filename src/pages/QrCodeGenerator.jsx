import React from 'react'
import SubNavBar from '../components/SubNavBar'
import { FcDownload } from "react-icons/fc";
import { FcShare } from "react-icons/fc";

const QrCodeGenerator = () => {
    return (
        <>
            <SubNavBar title="Qr code generator" />
            <div className=" min-h-[calc(100vh-190px)] bgShadow w-[50%] mx-auto my-5">
                <div className=" flex w-full flex-col py-3 px-5 border border-black">
                    <div className="btn-gp flex flex-row items-center gap-2 p-3 justify-evenly">
                        <input type="color" value="#ffffff" />
                        <input type="color" />
                        <select name="" id="" className=' px-3 py-1 rounded-md outline-none'>
                            <option value="100">100 * 100</option>
                            <option value="200">200 * 200</option>
                            <option value="300">300 * 300</option>
                            <option value="400" selected>400 * 400</option>
                            <option value="500">500 * 500</option>
                            <option value="600">600 * 600</option>
                            <option value="700">700 * 700</option>
                            <option value="800">800 * 800</option>
                            <option value="900">900 * 900</option>
                            <option value="1000">1000 * 1000</option>
                        </select>
                        <button className=" border border-white px-3 py-1 rounded-md flex items-center gap-2"><FcDownload className=' text-lg' />download</button>
                        <button className=" border border-white px-3 py-1 rounded-md flex items-center gap-2"><FcShare className=' text-lg' />share</button>
                    </div>
                    <div className="qrcode p-3">
                        qr
                    </div>
                </div>
            </div>
        </>
    )
}

export default QrCodeGenerator
