import React, { useState } from 'react'
import SubNavBar from '../components/SubNavBar'
import "../components/css/piano.css"

const Piano = () => {
    const [volumeValue, setVolumeValue] = useState(0.5);
    const [showKeys, setShowKeys] = useState(false);
    console.log(volumeValue);

    let allKeys = [];
    let audio = new Audio(`/tunes/a.wav`)
    const pianoKeys = document.querySelectorAll(".pianoKeys .key")

    const playTune = (key) => {
        audio.src = `/tunes/${key}.wav`
        audio.volume = volumeValue
        audio.play()
        const clickedKey = document.querySelector(`[data-key="${key}"]`);
        clickedKey.classList.add('active');
        setTimeout(() => {
            clickedKey.classList.remove('active');
        }, 50);
    }

    pianoKeys.forEach((key) => {
        allKeys.push(key.dataset.key)
        key.addEventListener('click', () => playTune(key.dataset.key))
    })

    const handleVolumeChange = (e) => {
        setVolumeValue(e.target.value);
    };
    const toggleKeys = () => {
        setShowKeys(!showKeys)
        pianoKeys.forEach((key) => {
            key.classList.toggle('hide')
        })
    }

    const pressedKeys = (e) => {
        if (allKeys.includes(e.key)) {
            playTune(e.key)
        }
    }

    document.addEventListener('keydown', pressedKeys)

    return (
        <>
            <SubNavBar title="Typing Speed Test" />
            <div className="min-h-[calc(100vh-190px)] w-[70%] mx-auto bgShadow px-5 py-10 my-5 relative pianoCard">
                <div className="PianoControl">
                    <h2 className="pianoTitle font-semibold text-lg">
                        Piano
                    </h2>
                    <div className="volume-column volume-slider">
                        <span>Volume</span>
                        <input type="range" min="0" max="1" value={volumeValue} onChange={handleVolumeChange} step="any" />
                    </div>
                    <div className="volume-column keys-checkbox">
                        <span>Show Keys</span>
                        <input type="checkbox" name="" id="" onChange={toggleKeys} checked={showKeys} />
                    </div>
                </div>
                <ul className="pianoKeys">
                    <li className="key white" data-key="a"><span>a</span></li>
                    <li className="key black" data-key="w"><span>w</span></li>
                    <li className="key white" data-key="s"><span>s</span></li>
                    <li className="key black" data-key="e"><span>e</span></li>
                    <li className="key white" data-key="d"><span>d</span></li>
                    <li className="key white" data-key="f"><span>f</span></li>
                    <li className="key black" data-key="t"><span>t</span></li>
                    <li className="key white" data-key="g"><span>g</span></li>
                    <li className="key black" data-key="y"><span>y</span></li>
                    <li className="key white" data-key="h"><span>h</span></li>
                    <li className="key black" data-key="u"><span>u</span></li>
                    <li className="key white" data-key="j"><span>j</span></li>
                    <li className="key white" data-key="k"><span>k</span></li>
                    <li className="key black" data-key="o"><span>o</span></li>
                    <li className="key white" data-key="l"><span>l</span></li>
                    <li className="key black" data-key="p"><span>p</span></li>
                    <li className="key white" data-key=";"><span>;</span></li>
                </ul>
            </div>
        </>
    )
}

export default Piano