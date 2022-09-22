import React, {useState }
from "react";
import { useNavigate} from "react-router-dom";
import Button from "../Components/Button";
import InputComponent from "../Components/InputComponent";
import Navbar from "../Components/Navbar";
import "./newbooking.css";

function Newbooking() {
  const navigate = useNavigate();
  const [getAvailRoom, setGetAvailRoom] = useState(false)
  const[secondBtnsec,setSecondBtnsec] = useState(false)

  function backClick() {
    navigate(-1);
  }

  function roomSet(){
    setGetAvailRoom(!getAvailRoom)
  }

  function bookRoom(){
    setSecondBtnsec(true)
  }
  return (
    <div className="newbooking_container">
      <div className="navbar_sec">
        <Navbar />
      </div>
      <div className="header_sec">
        <h1>New Booking</h1>
      </div>
      <div className="inputdata_sec">
        <form className="form_container" action="" method="post">
          <div className="input_data_container">
            <InputComponent
              title="Guest Last Name *"
              type="text"
              placeholder="Guest Last Name"
            />
            <InputComponent
              title="Guest First Name *"
              type="text"
              placeholder="Guest First Name"
            />
            <InputComponent
              title="Checkin Date *"
              type="date"
              placeholder="Checkin Date"
            />
            <InputComponent
              title="Checkout Date *"
              type="date"
              placeholder="Checkout Date"
            />
            <InputComponent
              title="Number of Adult *"
              type="number"
              placeholder="Number of Adult"
            />
            <InputComponent
              title="Number of Children *"
              type="number"
              placeholder="Number of Children"
            />
          </div>
          <div className="room_result_sec">
            <div>Room </div>
            <div>202 at 485$ per night</div>
          </div>
          <div className="btn_section_booking">
            <div className="_btn">
              <Button
                color="white"
                back="orange"
                text="Get Available Room"
                width="200px"
                functionality={roomSet}
              />

              {getAvailRoom && (<>
                <Button
                color="orange"
                back="white"
                type="Secondary"
                text="Book Room"
                width="200px"
                functionality={bookRoom}
              />
              <Button
                color="orange"
                back="white"
                text="Back"
                width="200px"
                functionality={backClick}
              />
              
              </>)}
          
            </div>
            <div className="_btn">

              {secondBtnsec && (<>
                <Button
                color="orange"
                back="white"
                type="Secondary"
                text="Checkin"
                width="200px"
              />
              <Button
                color="orange"
                back="white"
                type="Secondary"
                text="Checkout"
                width="200px"
              />
              <Button
                color="orange"
                back="white"
                type="Secondary"
                text="Cancel"
                width="200px"
              
              />
              
              </>)}
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newbooking;
