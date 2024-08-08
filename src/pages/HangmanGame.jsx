import React, { useEffect, useState } from 'react'
import SubNavBar from '../components/SubNavBar'
import { words } from '../assets/WordList'

const HangmanGame = () => {
    const [lose, setLose] = useState(false)
    const [win, setWin] = useState(false)
    const [currentWord, setCurrentWord] = useState('')
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongGuessCount, setWrongGuessCount] = useState(0)
    const [hint, setHint] = useState('')
    const [clicked, setClicked] = useState(false)

    const maxGuesses = 6

    useEffect(() => {
        getRandomWord()
    }, [])

    const resetGame = () => {
        setCorrectLetters([])
        setWrongGuessCount(0)
        setWin(false)
        setLose(false)
    }

    const getRandomWord = () => {
        const { word, hint } = words[Math.floor(Math.random() * words.length)]
        setCurrentWord(word)
        setHint(hint)
        resetGame()
    }

    const handleGuess = (clickedLetter) => {
        if (currentWord.includes(clickedLetter)) {
            const newCorrectLetters = [...correctLetters, clickedLetter]
            setCorrectLetters(newCorrectLetters)
            const newCorrectLettersCount = currentWord.split('').filter((letter) => newCorrectLetters.includes(letter)).length
            // console.log(newCorrectLettersCount);

            if (newCorrectLettersCount === currentWord.length) {
                setLose(true)
                setWin(true)
            }
        } else {
            const newWrongGuessCount = wrongGuessCount + 1
            setWrongGuessCount(newWrongGuessCount)
            if (newWrongGuessCount >= maxGuesses) {
                setLose(true)
                setWin(false)
            }
        }
    }

    const handleButtonClick = (letter) => {
        if (!correctLetters.includes(letter)) {
            handleGuess(letter)
        }
    }

    return (
        <>
            <SubNavBar title="hangman game" />
            <div className=' min-h-[calc(100vh-300px)] bgShadow w-[80%] mx-auto m-5'>
                {lose && (
                    <div className=" w-full flex justify-center items-center absolute top-[20%]">
                        <div className=" modal w-[60%] bg-white rounded-lg h-[50%] flex justify-center items-center flex-col gap-5 p-5">
                            <img src={`Imgs/hangmanGameImgs/${win ? 'victory' : 'lost'}.gif`} alt={win ? 'Victory' : 'Game Over'} className=' w-20 h-20' />
                            <h1 className=' text-2xl font-semibold tracking-wider'>{win ? 'Congrats!' : 'Game Over!'}</h1>
                            <p>{win ? 'You found the word:' : 'The correct word was:'} <b>{currentWord}</b></p>
                            <div className=" flex items-center gap-5">
                                <button className=' px-3 py-1 border border-black rounded-md font-semibold text-lg' onClick={getRandomWord}>Play Again</button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="mainContainer flex gap-5 min-h-[calc(100vh-190px)]">
                    <div className="imgContainer w-[40%] flex justify-center items-center">
                        <img src={`Imgs/hangmanGameImgs/hangman-${wrongGuessCount}.svg`} alt="Hangman" />
                    </div>
                    <div className=" w-[60%] bg-white/30 rounded-e-[32px] px-5 py-3 flex flex-col gap-5 justify-evenly items-center">
                        <h1 className=" font-semibold tracking-wider text-lg font-mono text-center break-words my-auto">
                            <b>{hint}</b>
                            {/* <b>A building or outdoor area in which plays, movies, or other performances are staged</b> */}
                        </h1>
                        <div className=' w-full flex items-center justify-between'>
                            <h1 className=' font-semibold font-mono text-sm text-gray-500'>
                                <b>Wrong Count : {wrongGuessCount} / {maxGuesses}</b>
                            </h1>
                            <h1 className=' font-semibold font-mono text-sm text-gray-500'><b>Total Letter : {currentWord.length}</b></h1>
                        </div>
                        <div className=" word-display flex flex-row w-full items-center justify-center my-auto">
                            {currentWord.split('').map((letter, index) => (
                                <li key={index} className={` list-none ml-3 font-semibold text-xl bg-white/30 px-5 py-2 rounded-md`}>
                                    {correctLetters.includes(letter) ? letter : "_"}
                                </li>
                            ))}
                        </div>
                        <div className=" mt-auto mx-auto w-full flex whitespace-nowrap flex-wrap py-2 items-center justify-center">
                            {Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)).map(letter => (
                                <button
                                    key={letter}
                                    className={` bg-white/30 px-5 py-2 rounded-md shadow-md font-semibold text-lg ml-5 mb-5 ${correctLetters.includes(letter) ? 'bg-slate-600/60 text-slate-200 pointer-events-none' : ''} `}
                                    onClick={() => handleButtonClick(letter)}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HangmanGame
