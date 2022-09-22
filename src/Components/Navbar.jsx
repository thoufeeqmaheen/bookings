import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [burgerpopup,setBurgerpopup] = useState(false)
  return (
    <div className="navbar_container">
      <div className="left_navbar_contents">
        <div className="options_navs">
          <img
            src="/assets/briefcase.png"
            height="60px"
            width="60px"
            alt="
          "
          />
        </div>
        <div className="options_navs">
          <h3>Booking System</h3>
        </div>
        <div className="options_nav">
          <NavLink
            to="/"
            className="link"
            style={({isActive}) => ({color: isActive ? 'orange' : 'black'})}          >
            Homepage
          </NavLink>
        </div>
        <div className="options_nav">
          <NavLink
            to="/room"
            className="link"
            style={({isActive}) => ({color: isActive ? 'orange' : 'black'})}
          >
            Room
          </NavLink>
        </div>
        <div className="options_nav">
        <NavLink
            to="/booking"
            className="link"
            style={({isActive}) => ({color: isActive ? 'orange' : 'black'})}
          >
            Booking
          </NavLink>
        </div>
      </div>
      <div className="right_navbar_contents">
        <div className="options_nav account_ico">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="15px"
            viewBox="0 0 448 512"
          >
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </div>
        <div className="options_nav ">Administrator</div>
        <div className="options_nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            fill="#FFA500"
            viewBox="0 0 576 512"
          >
            <path d="M534.6 278.6L557.3 256l-22.6-22.6-128-128L384 82.7 338.7 128l22.6 22.6L434.7 224 224 224l-32 0 0 64 32 0 210.7 0-73.4 73.4L338.7 384 384 429.3l22.6-22.6 128-128zM192 96l32 0 0-64-32 0L64 32 32 32l0 32 0 384 0 32 32 0 128 0 32 0 0-64-32 0-96 0L96 96l96 0z" />
          </svg>
        </div>
        <div className="menu_ico" onClick={()=>{setBurgerpopup(!burgerpopup)}}>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="20px"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>


      {burgerpopup && (<div className="burger_sec">
        <div>
        <NavLink
            to="/"
            className="link"
            style={({isActive}) => ({color: isActive ? 'orange' : 'black'})}          >
            Homepage
          </NavLink>
        </div>
        <div>
        <NavLink
            to="/room"
            className="link"
            style={({isActive}) => ({color: isActive ? 'orange' : 'black'})}
          >
            Room
          </NavLink>
        </div>
        <div>
        <NavLink
            to="/booking"
            className="link"
            style={({isActive}) => ({color: isActive ? 'orange' : 'black'})}
          >
            Booking
          </NavLink>
        </div>
      </div>)}
      
    </div>
  );
}

export default Navbar;
