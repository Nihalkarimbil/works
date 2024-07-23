import React from "react";

function Listtask({task,index,removeTask}){
    return(
        <>
            <div className="list-task">
                {task.title}
                <button onClick={()=>{removeTask(index)}} className="delete-btn">delete</button>
            </div>
            
        </>
    )
}
export default Listtask