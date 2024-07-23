import React, { useState } from "react";

function Addtask({addTask }){
    const [value,setValue]=useState("")
    const addItem=()=>{
        addTask(value)
        setValue("")
    }
    return(
        <>
            <div className="input-container">
                <input  type="text" className="aria" placeholder="add new task" value={value}
                onChange={(e)=>{setValue(e.target.value);
                }} />

                <button onClick={addItem} className="addbtn">ADD</button>
            </div>
        </>
    )
}
export default Addtask
