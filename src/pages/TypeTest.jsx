import React, { useState, useEffect } from 'react'
import SubNavBar from '../components/SubNavBar'
import { paragraphs } from '../assets/Paragraphs'

const TypeTest = () => {
    const [finish, setFinish] = useState(false)
    const [mistake, setMistake] = useState(0)
    const [time, setTime] = useState(60)
    const [timer, setTimer] = useState(null)
    const [text, setText] = useState("")
    const [inputText, setInputText] = useState("")

    useEffect(() => {
        const randomParagraph = getRandomParagraph()
        setText(randomParagraph.paragraph)  // Access the paragraph property
    }, [])

    const getRandomParagraph = () => {
        const randomIndex = Math.floor(Math.random() * paragraphs.length)
        return paragraphs[randomIndex]
    }

    const handleStart = () => {
        if (timer) return // prevent multiple timers
        setTimer(setInterval(() => {
            setTime(prev => {
                if (prev <= 1) {
                    clearInterval(timer)
                    setFinish(true)
                    return 0
                }
                return prev - 1
            })
        }, 1000))
    }

    const handleInputChange = (e) => {
        const value = e.target.value
        setInputText(value)

        // Calculate mistakes
        let mistakes = 0
        for (let i = 0; i < value.length; i++) {
            if (value[i] !== text[i]) {
                mistakes++
            }
        }
        setMistake(mistakes)

        if (value === text) {
            clearInterval(timer)
            setFinish(true)
        }
    }

    const handleRestart = () => {
        setFinish(false)
        setMistake(0)
        setTime(60)
        setInputText("")
        const randomParagraph = getRandomParagraph()
        setText(randomParagraph.paragraph)  // Access the paragraph property
        if (timer) clearInterval(timer)
        setTimer(null)
    }

    return (
        <>
            <SubNavBar title="Typing Speed Test" />
            <div className="min-h-[calc(100vh-190px)] w-[70%] mx-auto bgShadow p-10 my-5 relative">
                <div className="mainArea w-full border-2">
                    <div className="flex w-full items-center justify-between">
                        <p>Time : {time}s</p>
                        <p>Mistakes : {mistake}</p>
                    </div>
                    <div className="showText border-2">
                        <p>{text}</p>  {/* Render the text string */}
                    </div>
                    <div className="typingArea border-2 w-full">
                        <textarea
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder='Type here'
                            className='w-full'
                            disabled={finish || time === 0}
                        />
                    </div>
                    <div className="btn-group border-2">
                        <button onClick={handleStart} disabled={timer || finish}>
                            Start Typing
                        </button>
                    </div>
                </div>
                {finish && (
                    <div className="w-full flex justify-center items-center absolute top-[20%]">
                        <div className="modal w-[60%] bg-white rounded-lg h-[50%] flex justify-center items-center flex-col gap-5 p-5">
                            <h1>Result</h1>
                            <div>
                                <h1>Time : {60 - time}s</h1>
                                <h1>Mistakes : {mistake}</h1>
                            </div>
                            <div>
                                <h1>Accuracy : {((text.length - mistake) / text.length * 100).toFixed(2)}%</h1>
                                <h1>Speed : {((text.split(" ").length / (60 - time)) * 60).toFixed(2)} wpm</h1>
                            </div>
                            <div className="btn-groups">
                                <button onClick={handleRestart}>Restart</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default TypeTest
