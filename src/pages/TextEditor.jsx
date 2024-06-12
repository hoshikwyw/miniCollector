import React, { useState, useEffect } from 'react';
import '../components/css/textEditor.css';
import SubNavBar from '../components/SubNavBar';

const fonts = [
    "Roboto Mono",
    "Exo 2",
    "Source Code Pro",
    "Titillium Web",
    "Playfair Display",
    "Lobster",
    "Caveat",
];

const TextEditor = () => {
    const [text, setText] = useState('');
    const [color, setColor] = useState('#000000');
    const [fontSize, setFontSize] = useState(16);
    const [fontFamily, setFontFamily] = useState(fonts[0]);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const synth = window.speechSynthesis;

    useEffect(() => {
        const handleVoiceEnd = () => {
            setIsSpeaking(false);
        };

        synth.addEventListener('voiceschanged', handleVoiceEnd);

        return () => {
            synth.removeEventListener('voiceschanged', handleVoiceEnd);
        };
    }, [synth]);

    const handleListen = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.start();

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setText((prevText) => prevText + transcript);
        };
    };

    const handleSpeak = () => {
        const utterThis = new SpeechSynthesisUtterance();
        utterThis.rate = 0.5;
        utterThis.text = text;
        utterThis.voice = synth.getVoices()[1];

        utterThis.onstart = () => {
            setIsSpeaking(true);
        };

        utterThis.onend = () => {
            setIsSpeaking(false);
        };

        synth.speak(utterThis);
    };

    return (
        <>
            <SubNavBar title="text editor" />
            <div className=" min-h-[calc(100vh-190px)] w-[80%] mx-auto bgShadow p-10 my-5">
                <div className=" w-full h-full flex gap-3">
                    <div className=" w-[30%] border border-white p-5 rounded-lg">
                        <div className=" w-full flex items-center flex-col justify-between">
                            <div className=' w-full flex justify-between'>
                                <label htmlFor="text">Text : </label>
                                <small id="count">{text.length} characters</small>
                            </div>
                            <textarea
                                id="text"
                                className=" form-control w-full p-3 textArea"
                                value={text}
                                placeholder='some text ...'
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        <div className=" flex flex-col w-full gap-3 h-full py-3">
                            <div className=" flex items-center">
                                <h1 htmlFor="color">Color : </h1>
                                <input
                                    type="color"
                                    id="color"
                                    className="form-control"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                            <div className="">
                                <label htmlFor="fontSize">Font Size : </label>
                                <input
                                    type="number"
                                    id="fontSize"
                                    className="form-control outline-none w-14 py-1 px-3 rounded-md"
                                    value={fontSize}
                                    onChange={(e) => setFontSize(Number(e.target.value))}
                                />
                            </div>
                            <div className="">
                                <label htmlFor="fontFamily">Font Family : </label>
                                <select
                                    id="fontFamily"
                                    className="form-control outline-none py-1 px-3 rounded-md"
                                    value={fontFamily}
                                    onChange={(e) => setFontFamily(e.target.value)}
                                >
                                    {fonts.map((font) => (
                                        <option key={font} value={font}>
                                            {font}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className=" flex items-center">
                                <img onClick={handleSpeak} src="/public/Imgs/textToSpeech.png" alt=" text to speech photo" className=' w-10 h-10 cursor-pointer' />
                                <button
                                    id="textToSpeech"
                                    className={`btn ${isSpeaking ? 'btn-danger' : 'btn-primary'} btns`}
                                    onClick={handleSpeak}
                                    disabled={isSpeaking}
                                >
                                    {isSpeaking ? 'Speaking...' : 'Text to Speech'}
                                </button>
                            </div>
                            <div className=" flex items-center">
                                <img onClick={handleListen} src="/public/Imgs/speechToText.png" alt=" text to speech photo" className=' w-10 h-10 cursor-pointer' />
                                <button
                                    id="speechToText"
                                    className={`btn ${isListening ? 'btn-danger' : 'btn-primary'} btns`}
                                    onClick={handleListen}
                                    disabled={isListening}
                                >
                                    {isListening ? 'Listening...' : 'Speech to Text'}
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className=' w-[70%] border border-black min-h-full rounded-lg p-5 overflow-y-auto'
                        id="output"
                        style={{
                            color: color,
                            fontSize: `${fontSize}px`,
                            fontFamily: fontFamily,
                        }}
                    >
                        {text}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TextEditor;
