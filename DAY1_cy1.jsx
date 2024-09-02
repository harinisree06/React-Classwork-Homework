import React from "react";
function r()
{
    const name1="Kabil";
    const name2="Kabil";
    const object1={name:"Kabil"};
    const object2={name:"Kabil"};
    console.log(name1===name2);
    console.log(object1===object2);
    console.log(name1===object1);
};
const CY =()=>
{
    return(
        <div>
            <h1>Let we see the output of JAVASCRIPT</h1>
            <button onClick={r}>DAY1 CY1</button>      
        </div>
    );
};
export default CY;
