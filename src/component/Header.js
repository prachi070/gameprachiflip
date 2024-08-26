import React from 'react'
import './Header.css'
import { GiBrain } from "react-icons/gi";
import { IoLogoGameControllerB } from "react-icons/io";
const Header = () => {
  return (
    <>
    <div className='main_heading_name'>
    <GiBrain className='brainicon' /> Memory Game <IoLogoGameControllerB className='brainicon'  />
    </div>
    
    </>
  )
}

export default Header




