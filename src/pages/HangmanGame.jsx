import React from 'react'
import SubNavBar from '../components/SubNavBar'

const HangmanGame = () => {
    return (
        <>
            <SubNavBar title="hangman game" />
            <div className=' min-h-[calc(100vh-300px)] bgShadow w-[80%] mx-auto m-5 py-3 px-5'>
                <div className=" w-full flex justify-center items-center bg-orange-300 h-[calc(100vh-213px)]">
                    <div className=" modal w-[60%] bg-white/50 rounded-lg h-[50%] flex justify-center">
                        <h1>Game Over!!</h1>
                    </div>
                </div>
                <div className="imgSec">
                    <img src="./" alt="" />
                </div>
            </div>
        </>
    )
}

export default HangmanGame
