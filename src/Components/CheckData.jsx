import React from 'react'
import Button from './Button'
import './checkdata.css'

function CheckData({data,btn_text}) {
  return (
    <div className='checkdatacontainer'>
        <div className="name_sec">
            <div className="top_sec"><label htmlFor="">{data.name}</label>,<label htmlFor="">{data.place}</label></div>
            <div className="date_sec">{data.date}</div>
        </div>
        <div className="id_sec">{data.id}</div>
        <div className="btn_sec">
            <Button color='white' text={btn_text} back='#d7ae63' width='80px'/>
        </div>
    </div>
  )
}

export default CheckData