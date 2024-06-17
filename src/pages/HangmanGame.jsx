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
            if (newCorrectLetters.length === currentWord.length) {
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
                <div className="mainContainer flex gap-5 min-h-[calc(100vh-213px)]">
                    <div className="imgContainer w-[40%] flex justify-center items-center">
                        <img src={`Imgs/hangmanGameImgs/hangman-${wrongGuessCount}.svg`} alt="Hangman" />
                    </div>
                    <div className="guessArea w-[60%] bg-white/30 rounded-e-[32px] px-5 py-3">
                        <ul className="word-display flex flex-row">
                            {currentWord.split('').map((letter, index) => (
                                <li key={index} className={`letter ${correctLetters.includes(letter) ? 'guessed' : ''}`}>
                                    {correctLetters.includes(letter) ? letter : " "}
                                </li>
                            ))}
                        </ul>
                        <h1 className="hint-text">
                            <b>{hint}</b>
                        </h1>
                        <h1 className='guesses-text'>
                            <b>{wrongGuessCount} / {maxGuesses}</b>
                        </h1>
                        <div className="keyboard">
                            {Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)).map(letter => (
                                <button
                                    key={letter}
                                    onClick={() => handleGuess(letter)}
                                    disabled={correctLetters.includes(letter) || lose}
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
