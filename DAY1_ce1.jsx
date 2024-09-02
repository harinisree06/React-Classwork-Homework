import React from "react";
function AlertMsg()
{
    alert("Message from Javascript Alert!");
    console.log("Message to developer");
}
const Message = ()=>{
    return(
        <div>
             <h1>Let we see the output of JAVASCRIPT</h1>
            <button onClick={AlertMsg}>CE1</button>
        </div>
    );
};
export default Message;
