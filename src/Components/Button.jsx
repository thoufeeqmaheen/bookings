import React from 'react'
import './button.css'

function Button({color,back,text,width,functionality,type}) {


 
  return (
    <button className={type === 'Secondary'?'btn secondary':'btn'}  style={{color:color,backgroundColor:back,width:width}} onClick={functionality}>{text}</button>
  )
}

export default Button