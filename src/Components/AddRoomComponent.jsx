import React, { useState } from "react";
import Button from "./Button";
import InputComponent from "./InputComponent";
import "./addroom.css";
import Selectround from "./Selectround";
import { useEffect } from "react";

function AddRoomComponent({ setAddroom ,editingId,setEditingId,roomData}) {

  const [formData,setFormData] = useState({
    roomNumber: "",
    adultCapacity: "",
    childCapacity:"",
    price:""
  });

  useEffect(()=>{
    if(editingId)setFormData(roomData.find(r=>r.Id === editingId))
  },[editingId])

  const {roomNumber,adultCapacity,childCapacity,price} = formData;

  const onChange = (value,key)=>{
    setFormData(prev=>({
      ...prev,
      [key]:value
    }))
  }

  const [ selectArray,setSelectArray] = useState([]);

  const SendData = (e) => {
    e.preventDefault();
    closeWindow();
  };

  const closeWindow = ()=>{
    setAddroom(false);
    setEditingId(null);
  }
  return (
    <div className="add_room_wrapper">
      <div className="addroomcontainer">
        <h1>Add New Room</h1>
        <form action="" onSubmit={SendData} method="post">
          <InputComponent
            title="Room number *"
            type="number"
            value={roomNumber}
            placeholder="Room number"
            onChange={(value)=>onChange(value,"roomNumber")}
          />
          <InputComponent
            title="Adult Capacity *"
            type="number"
            value={adultCapacity}
            placeholder="Adult Capacity"
            onChange={(value)=>onChange(value,"adultCapacity")}
          />
          <InputComponent
            title="Child Capacity *"
            type="number"
            value={childCapacity}
            placeholder="Child Capacity"
            onChange={(value)=>onChange(value,"childCapacity")}
          />
          <InputComponent
            title="Price *"
            type="number"
            value={price}
            placeholder="Price"
            onChange={(value)=>onChange(value,"price")}
          />
      {editingId &&
        <>
        <label htmlFor="">Select Aminities</label>
       <select onChange={(e)=>{setSelectArray([...selectArray,e.target.value])}} >
            <option value=""></option>
            <option value="Bed">Bed</option>
            <option value="Tv">Tv</option>
            <option value="Wifi">Wifi</option>
            <option value="Ac">Ac</option>
            <option value="Induction">Induction</option>
       </select>

       <div className="selecteddata">
        {selectArray.map((data,index)=>{
          return(

           <Selectround selectvalue={data} key={index} index={index} selectArray={selectArray} setSelectArray={setSelectArray}/>
          )
        })}
       </div>
       </>}
          <div className="add_room_btn">
            <Button color="white" back="orange" width="100px" text="Save" />
            <label htmlFor="" style={{ color: "black" }}>
              or
            </label>
            <label
              htmlFor=""
              onClick={closeWindow}
            >
              Cancel
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRoomComponent;
