import React, { useState, useEffect } from 'react'
import SubNavBar from '../components/SubNavBar'
import "../components/css/pixelDraw.css"

const GridDraw = () => {
    const [color, setColor] = useState('#000000')
    const [draw, setDraw] = useState(false)
    const [erase, setErase] = useState(false)
    const [deviceType, setDeviceType] = useState('mouse')

    useEffect(() => {
        const isTouchDevice = () => {
            try {
                document.createEvent("TouchEvent")
                setDeviceType("touch")
                return true
            } catch (e) {
                setDeviceType("mouse")
                return false
            }
        }

        isTouchDevice()

        const container = document.querySelector(".gridContainer")
        const gridButton = document.getElementById("submit-grid")
        const clearGridButton = document.getElementById("clear-grid")
        const gridWidth = document.getElementById("width-range")
        const gridHeight = document.getElementById("height-range")
        const colorButton = document.getElementById("color-input")
        const eraseBtn = document.getElementById("erase-btn")
        const paintBtn = document.getElementById("paint-btn")
        const widthValue = document.getElementById("width-value")
        const heightValue = document.getElementById("height-value")

        const events = {
            mouse: {
                down: "mousedown",
                move: "mousemove",
                up: "mouseup"
            },
            touch: {
                down: "touchstart",
                move: "touchmove",
                up: "touchend",
            }
        }

        const handleCreateGrid = () => {
            container.innerHTML = ""
            let count = 0
            for (let i = 0; i < gridHeight.value; i++) {
                count += 2
                let div = document.createElement("div")
                div.classList.add("gridRow")
                for (let j = 0; j < gridWidth.value; j++) {
                    count += 2
                    let col = document.createElement("div")
                    col.classList.add("gridCol")
                    col.setAttribute("id", `gridCol${count}`)
                    col.addEventListener(events[deviceType].down, () => {
                        setDraw(true)
                        if (erase) {
                            col.style.backgroundColor = "transparent"
                        } else {
                            col.style.backgroundColor = colorButton.value
                        }
                    })

                    col.addEventListener(events[deviceType].move, (e) => {
                        if (draw) {
                            const elementId = document.elementFromPoint(
                                !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                                !isTouchDevice() ? e.clientY : e.touches[0].clientY,
                            )
                            checker(elementId)
                        }
                    })

                    col.addEventListener(events[deviceType].up, () => {
                        setDraw(false)
                    })
                    div.appendChild(col)
                }
                container.appendChild(div)
            }
        }

        const checker = (elementId) => {
            const gridColumns = document.querySelectorAll(".gridCol")
            gridColumns.forEach((ele) => {
                if (elementId && elementId.id === ele.id) {
                    if (draw && !erase) {
                        ele.style.backgroundColor = colorButton.value
                    } else if (draw && erase) {
                        ele.style.backgroundColor = "transparent"
                    }
                }
            })
        }

        gridButton.addEventListener("click", handleCreateGrid)
        clearGridButton.addEventListener("click", () => {
            container.innerHTML = ""
        })
        eraseBtn.addEventListener("click", () => {
            setErase(true)
        })
        paintBtn.addEventListener("click", () => {
            setErase(false)
        })
        gridWidth.addEventListener("input", () => {
            widthValue.innerHTML = gridWidth.value < 10 ? `0${gridWidth.value}` : gridWidth.value
        })
        gridHeight.addEventListener("input", () => {
            heightValue.innerHTML = gridHeight.value < 10 ? `0${gridHeight.value}` : gridHeight.value
        })

        window.onload = () => {
            gridHeight.value = 0
            gridWidth.value = 0
        }

        return () => {
            gridButton.removeEventListener("click", handleCreateGrid)
            clearGridButton.removeEventListener("click", () => {
                container.innerHTML = ""
            })
            eraseBtn.removeEventListener("click", () => {
                setErase(true)
            })
            paintBtn.removeEventListener("click", () => {
                setErase(false)
            })
            gridWidth.removeEventListener("input", () => {
                widthValue.innerHTML = gridWidth.value < 10 ? `0${gridWidth.value}` : gridWidth.value
            })
            gridHeight.removeEventListener("input", () => {
                heightValue.innerHTML = gridHeight.value < 10 ? `0${gridHeight.value}` : gridHeight.value
            })
        }
    }, [draw, erase, deviceType])

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <>
            <SubNavBar title="pixel draw" />
            <div className=' min-h-[calc(100vh-190px)] w-[80%] mx-auto bgShadow my-5 flex'>
                <div className="wrapper bg-white/30 py-5 px-5 rounded-[32px] rounded-r-none w-[25%] min-h-[calc(100vh-190px)]">
                    <div className="options">
                        <div className="opt-wrapper flex flex-col gap-5 w-full">
                            <div className="slider flex flex-col gap-2">
                                <label htmlFor="width-range" className=' font-semibold'>Grid Width</label>
                                <div className=" flex items-center gap-2 ">
                                    <input type="range" id="width-range" min="1" max="55" className=' w-full' />
                                    <span id="width-value">00</span>
                                </div>
                            </div>
                            <div className="slider flex flex-col gap-2">
                                <label htmlFor="height-range" className=' font-semibold'>Grid Height</label>
                                <div className=" flex items-center gap-2 ">
                                    <input type="range" id="height-range" min="1" max="31" className=' w-full' />
                                    <span id="height-value">00</span>
                                </div>
                            </div>
                        </div>
                        <div className="opt-wrapper flex flex-col gap-5 py-5">
                            <div className=" flex gap-5 items-center">
                                <input type="color" id="color-input" onChange={handleColorChange} />
                                <span className=' bg-slate-50 px-3 py-1 rounded-md'>{color}</span>
                            </div>
                            <div className=" flex flex-row gap-5">
                                <button id='submit-grid'>Create Grid</button>
                                <button id="clear-grid">Clear Grid</button>
                            </div>
                            <div className=" flex flex-row gap-5">
                                <button id="erase-btn">Erase</button>
                                <button id="paint-btn">Paint</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gridContainer w-full justify-center items-center h-full p-5">

                </div>
            </div>
        </>
    )
}

export default GridDraw
