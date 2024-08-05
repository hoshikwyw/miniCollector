import React, { useRef, useState } from 'react'
import SubNavBar from '../components/SubNavBar'
import { FcDownload } from "react-icons/fc";
import { FcShare } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";
import QRCodeStyling from 'qr-code-styling';

const QrCodeGenerator = () => {
    const [qrColor, setQrColor] = useState("#000000")
    const [qrBgColor, setQrBgColor] = useState("#ffffff")
    const [qrSize, setQrSize] = useState(300)
    const [text, setText] = useState('')
    const ref = useRef(null)

    const qrCode = new QRCodeStyling({
        width: qrSize,
        height: qrSize,
        dotsOptions: {
            color: qrColor,
            type: 'rounded'
        },
        backgroundOptions: {
            color: qrBgColor,
        },
    })

    const createClick = () => {
        if (text.length === 0) {
            alert("Please enter text")
            return
        } else {
            qrCode.append(ref.current)
            qrCode.update({
                data: text
            })
        }
    }

    const downloadClick = () => {
        qrCode.download({
            extension: 'png',
            name: text
        })
    }

    return (
        <>
            <SubNavBar title="Qr code generator" />
            <div className=" min-h-[calc(100vh-190px)] bgShadow w-[50%] mx-auto my-5">
                <div className=" flex w-full flex-col py-3 px-5 h-full justify-center items-center gap-3">
                    <div className=" flex w-full flex-row justify-between items-center">
                        <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)} className=' outline-none rounded-md px-5 py-1 w-[50%]' placeholder='Enter text' />
                        <input type="color" id='qrColor' value={qrColor} onChange={(e) => setQrColor(e.target.value)} />
                        <input type="color" id='qrBgColor' value={qrBgColor} onChange={(e) => setQrBgColor(e.target.value)} />
                        <select name="" id="qrSize" value={qrSize} className=' px-5 py-1 rounded-md outline-none border-transparent' onChange={(e) => setQrSize(e.target.value)}>
                            <option value="100">100 * 100</option>
                            <option value="200">200 * 200</option>
                            <option value="300">300 * 300</option>
                        </select>
                    </div>
                    <div className=" flex w-full justify-center items-center gap-5">
                        <button className=" border border-white px-3 py-1 rounded-md flex items-center gap-2" onClick={createClick}><FcPlus className=' text-lg' />Create</button>
                        <button className=" border border-white px-3 py-1 rounded-md flex items-center gap-2" onClick={downloadClick}><FcDownload className=' text-lg' />download</button>
                    </div>
                    <div className="qrcode p-3 h-[calc(100vh-350px)] w-full flex justify-center items-center text-center relative" ref={ref}>
                        <h1 className=' absolute top-50% left-50%'>
                            Please Click Create Button To Make Your Own QR Code
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QrCodeGenerator
