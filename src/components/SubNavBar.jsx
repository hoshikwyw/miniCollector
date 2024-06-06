import React from 'react'
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const SubNavBar = (props) => {
    const navigate = useNavigate()
    return (
        <div className=' mx-40 mt-5 flex items-center gap-5'>
            <RiArrowGoBackFill className=' text-2xl cursor-pointer' onClick={() => navigate(-1)} />
            <h1 className=' font-semibold uppercase tracking-widest text-lg'>{props.title}</h1>
        </div>
    )
}

export default SubNavBar
