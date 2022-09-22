import React from "react";

function InputComponent({title,type="text",placeholder,onChange,value}) {
  return (
    <div className="input_wrapper">
      <div className="label">
        <label htmlFor="">{title}</label>
      </div>
      <div className="input" >
      <input type={type} value={value} placeholder={placeholder} onChange={(e)=>onChange(e.target.value,e)} required/>
      </div>
    </div>
  );
}

export default InputComponent;
