import React from 'react'
import InputComponent from '../Components/InputComponent'
import Navbar from '../Components/Navbar'
import './newbooking.css'

function Newbooking() {
  return (
    <div className='newbooking_container'>
        <div className="navbar_sec">
            <Navbar/>
        </div>
        <div className="header_sec">
            <h1>New Booking</h1>
        </div>
<div className="inputdata_sec">
        <form className='form_container' action="" method="post">
        <div className="input_data_container">
            <InputComponent title="Guest Last Name *"
            type="text"
            placeholder="Guest Last Name"
            />
             <InputComponent title="Guest First Name *"
            type="text"
            placeholder="Guest First Name"
            /> 
            <InputComponent title="Checkin Date *"
            type="date"
            placeholder="Checkin Date"
            /> 
            <InputComponent title="Checkout Date *"
            type="date"
            placeholder="Checkout Date"
            /> 
            <InputComponent title="Number of Adult *"
            type="number"
            placeholder="Number of Adult"
            /> 
            <InputComponent title="Number of Children *"
            type="number"
            placeholder="Number of Children"
            />
        </div>
        </form>
        </div>
    </div>
  )
}

export default Newbooking