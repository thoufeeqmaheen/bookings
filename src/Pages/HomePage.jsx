import React from "react";
import CheckComponent from "../Components/CheckComponent";
import Navbar from "../Components/Navbar";
import "./homepage.css";
import { Checkin } from "../ServiceData/Checkindata";
import { Checkout } from "../ServiceData/Checkout";



function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="mainsec">
        <div className="image_container"></div>
        <div className="check_section">
          <div className="checkin">
            <CheckComponent heading='Checking In Today' btn_text = 'Check In' data={Checkin}/>
          </div>
          <div className="checkout">
            <CheckComponent heading='Checking Out Today' btn_text = 'Check Out' data={Checkout}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
