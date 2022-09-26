import React, { useState } from "react";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import "./room.css";
import AddRoomComponent from "../Components/AddRoomComponent";
import { useEffect } from "react";
import apiCall from "../Sevices/apiCall";
import editButton from "../Assets/Icons/pen-solid.svg"
import deleteButton from "../Assets/Icons/trash-solid.svg"

function Room() {
  const [roomData, setRoomData] = useState([]);
  const [addRoom, setAddroom] = useState(false);
  const [editingId,setEditingId] = useState(null);
  const [deleteId,setDeleteId] = useState(null)

  useEffect(()=>{
    apiCall("/rooms","GET")
    .then(response=>{
      setRoomData(response); 
    })
  },[addRoom,deleteId])

  function popupRoom() {
    console.log(addRoom);
    setAddroom(true);
  }

  const deleteRoom = async()=>{
    const res = await apiCall(`/rooms/${deleteId}`,"DELETE");
    console.log(res);
    setDeleteId(null)
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
          functionality={popupRoom}
          
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
          <div className="header_options">
            <h5>Actions</h5>
          </div>
        </div>

        {roomData.map(({
          roomNumber,
          adultCapacity,
          childCapacity,
          price,
          id
        }) => {
          return (
            <div  className="content_table" key={id}>
              <div className="content_values id_room">{roomNumber}</div>
              <div className="content_values">{adultCapacity}</div>
              <div className="content_values">{childCapacity}</div>
              <div className="content_values">{price+"$"}</div>
              <div className="action-section">
                <div onClick={()=>{
                    setEditingId(id);
                    setAddroom(true)
                  }} className="action-button">
                  <img src={editButton} alt="Edit" />
                </div>
                <div
                  onClick={()=>{
                    setDeleteId(id)
                  }}
                  className="action-button">
                  <img src={deleteButton} alt="Delete" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={addRoom || deleteId? "popupwindow" : ""}>
        
        {addRoom && <AddRoomComponent
            roomData={roomData}
            editingId={editingId}
            setEditingId={setEditingId}
            setAddroom={setAddroom}
          />}
        {deleteId &&
          <div className="delete-popup">
            <div className="delete-popup-message">
              Are you sure? Want to delete?
            </div>
            <div className="delete-popup-action-buttons">
              <button
                className="delete-button"
                onClick={deleteRoom}
                >Delete</button>
              <button onClick={()=>{
                setDeleteId(null)
              }}>Cancel</button>
            </div>
          </div>}
      </div>
    </div>
  );
}

export default Room;
