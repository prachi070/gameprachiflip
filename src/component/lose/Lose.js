import React from 'react'
import './Lose.css'
import cry from "./emonew.gif"
const Lose = () => {
  return (
    <div className='lose_box'>
    <br/>
   
       <h1 style={{color:"black"}}>You lost the Game!</h1>
       <img src={cry} alt="Crying Emoji" className="crying-emoji" />
    </div>
  )
}

export default Lose
