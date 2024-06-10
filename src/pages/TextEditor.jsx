import React, { useState, useEffect } from 'react';
import '../components/css/textEditor.css';
import SubNavBar from '../components/SubNavBar';

const fonts = [
    "Agency FB",
    "Bodoni MT",
    "Banhaus 93 Regular",
    "Broadway Regular",
    "Brush Script MT Italic",
    "Lucida Handwriting Italic",
    "Kunstler Script Regular",
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
            <div className=" min-h-[calc(100vh-250px)] w-[80%] mx-auto bgShadow p-10 my-5">
                <div className=" w-full h-full">
                    <div className=' border border-black mb-3 h-[250px] rounded-lg p-5'
                        id="output"
                        style={{
                            color: color,
                            fontSize: `${fontSize}px`,
                            fontFamily: fontFamily,
                        }}
                    >
                        {text}
                    </div>
                    <div className="">
                        <div className=" w-full flex items-center flex-col justify-between">
                            <div className=' w-full flex justify-between'>
                                <label htmlFor="text">Text:</label>
                                <small id="count">{text.length} characters</small>
                            </div>
                            <textarea
                                id="text"
                                className=" form-control w-full p-3"
                                value={text}
                                placeholder='some text ...'
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        <div className=" flex w-full gap-3 h-full justify-between items-center py-3">
                            <div className=" flex items-center">
                                <h1 htmlFor="color">Color:</h1>
                                <input
                                    type="color"
                                    id="color"
                                    className="form-control"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                            <div className="">
                                <label htmlFor="fontSize">Font Size:</label>
                                <input
                                    type="number"
                                    id="fontSize"
                                    className="form-control"
                                    value={fontSize}
                                    onChange={(e) => setFontSize(Number(e.target.value))}
                                />
                            </div>
                            <div className="">
                                <label htmlFor="fontFamily">Font Family:</label>
                                <select
                                    id="fontFamily"
                                    className="form-control"
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

                        </div>
                        <div className="">
                            <button
                                id="textToSpeech"
                                className={`btn ${isSpeaking ? 'btn-danger' : 'btn-primary'}`}
                                onClick={handleSpeak}
                                disabled={isSpeaking}
                            >
                                {isSpeaking ? 'Speaking...' : 'Text to Speech'}
                            </button>
                            <button
                                id="speechToText"
                                className={`btn ${isListening ? 'btn-danger' : 'btn-primary'}`}
                                onClick={handleListen}
                                disabled={isListening}
                            >
                                {isListening ? 'Listening...' : 'Speech to Text'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TextEditor;
