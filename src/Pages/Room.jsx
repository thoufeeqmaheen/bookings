import React, { useState } from "react";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import "./room.css";
import { rooms } from "../ServiceData/Room";
import AddRoomComponent from "../Components/AddRoomComponent";

function Room() {
  const [roomData, setRoomData] = useState(rooms);
  const [addroom, setAddroom] = useState(false);
  const [editingId,setEditingId] = useState(null);
  console.log(addroom);

  function popuproom() {
    console.log(addroom);
    setAddroom(true);
  }

  return (
    <div className="room_page_container">
      <div className="navbar_sec">
      <Navbar />

      </div>

      <div className="heading_sec">
        <h1>Rooms</h1>
      </div>

      <div className="btn_section_addroom">
        <Button
          text="Add Room"
          color="white"
          back="orange"
          width="100px"
          functionality={popuproom}
          
        />
      </div>
      <div className="table_section_rooms">
        <div className="header">
          <div className="header_options">
            <h5>Room Number</h5>
          </div>
          <div className="header_options">
            <h5>Adult Capacity</h5>
          </div>
          <div className="header_options">
            <h5>Child Capacity</h5>
          </div>
          <div className="header_options">
            <h5>Price $</h5>
          </div>
        </div>

        {roomData.map(({
          roomNumber,
          adultCapacity,
          childCapacity,
          price,
          Id
        }) => {
          return (
            <div onClick={()=>{
              setEditingId(Id);
              setAddroom(true)
            }} className="content_table" key={Id}>
              <div className="content_values id_room">{roomNumber}</div>
              <div className="content_values">{adultCapacity}</div>
              <div className="content_values">{childCapacity}</div>
              <div className="content_values">{price+"$"}</div>
            </div>
          );
        })}
      </div>
      <div className={addroom ? "popupwindow" : ""}>
        
        {addroom && <AddRoomComponent
            roomData={roomData}
            editingId={editingId}
            setEditingId={setEditingId}
            setAddroom={setAddroom}
          />}
      </div>
    </div>
  );
}

export default Room;
