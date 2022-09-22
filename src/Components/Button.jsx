import React from 'react'
import './button.css'

function Button({color,back,text,width,functionality}) {


 
  return (
    <button className='btn' style={{color:color,backgroundColor:back,width:width}} onClick={functionality}>{text}</button>
  )
}

export default Button