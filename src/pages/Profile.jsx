import React from 'react'
import pfp from "../MemoryImages/card1.jpg"

const Profile = () => {
  return (
    <div className=' min-h:screen flex justify-center items-center'>
      <div className=' mt-5'>
        <img src={pfp} alt="" className=' w-28 h-28 rounded-full'/>
        <h2>Name</h2>
        <h2>dob</h2>
        <h2>Address</h2>
        <h2>gmail</h2>
      </div>
      <div className="">
        <h2></h2>
      </div>
    </div>
  )
}

export default Profile
