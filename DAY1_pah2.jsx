import React from "react";
function  n()
{
    let age=18;
    let name="kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age,name);
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(age,setStatus);
    alert("Check the console output!");
}
const Pah = () =>
{
    return(
        <div>
            <h1>Let we see the output of JAVASCRIPT</h1>
            <button onClick={n}>DAY1 PAH</button>
        </div>
    );
};
export default Pah;
