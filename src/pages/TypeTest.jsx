import React, { useState } from 'react'
import SubNavBar from '../components/SubNavBar'
import { paragraphs } from '../assets/Paragraphs'

const TypeTest = () => {
    const [finish, setFinish] = useState(false)
    const [mistake, setMistake] = useState(0)
    const [time, setTime] = useState(60)
    const [timer, setTimer] = useState(0)
    const [text, setText] = useState("")
    const [inputText, setInputText] = useState("")

    return (
        <>
            <SubNavBar title="Typing speed test" />
            <div className=" min-h-[calc(100vh-190px)] w-[70%] mx-auto bgShadow p-10 my-5 relative">
                <div className="mainArea">
                    <div className=" flex w-full items-center justify-between">
                        <p>Time : 00s</p>
                        <p className="">Mistakes : 0</p>
                    </div>
                    <div className="showText">
                        <p>random text</p>
                    </div>
                    <div className="typingArea">
                        <textarea name="" id="" placeholder='type here'></textarea>
                    </div>
                    <div className="btn-group">
                        <button className="">Start Type</button>
                    </div>
                </div>
                {finish && (
                    <div className=" w-full flex justify-center items-center absolute top-[20%]">
                        <div className=" modal w-[60%] bg-white rounded-lg h-[50%] flex justify-center items-center flex-col gap-5 p-5">
                            <h1>Result</h1>
                            <div className="">
                                <h1 className="">Time : 0s</h1>
                                <h1 className="">Mistakes : 0</h1>
                            </div>
                            <div>
                                <h1>Accuracy : 0%</h1>
                                <h1 className="">Speed : 0 wpm</h1>
                            </div>
                            <div className="btn-groups">
                                <button>Restart</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default TypeTest
