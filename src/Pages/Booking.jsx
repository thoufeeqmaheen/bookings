import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import './booking.css'
import {booking} from '../ServiceData/Booking'

function Booking() {
  return (
    <div className="bookingcontainer">
      <div className="navbar_sec">
        <Navbar />
      </div>
      <div className="booking_heading">
        <h1>Bookings</h1>
        <div className="newbookinglink">
            <NavLink to='/newbooking' className='link' style={{color:'orange'}}>New booking</NavLink>
        </div>
      </div>
      <div className="table_section_rooms">
        <div className="header_booking">
          <div className="header_options">
            <h5>Guest Last Name</h5>
          </div>
          <div className="header_options">
            <h5>Guest First Name</h5>
          </div>
          <div className="header_options">
            <h5>Room Number</h5>
          </div>
          <div className="header_options">
            <h5>Checkin Date</h5>
            
          </div>
          <div className="header_options">
            <h5>Checkout Date</h5>
          </div>
          <div className="header_options">
            <h5>Status</h5>
          </div>
        </div>

        {booking.map((r_data, index) => {
          return (
            <div className="content_table_booking" key={index}>
              <div className="content_values id_room">{r_data.lastname}</div>
              <div className="content_values">{r_data.firstname}</div>
              <div className="content_values">{r_data.roomnumber}</div>
           
              <div className="content_values">{r_data.checkindate}</div>
              <div className="content_values">{r_data.checkoutdate}</div>
              <div className="content_values">{r_data.status}</div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Booking;
