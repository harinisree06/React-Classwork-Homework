import React from "react";
function CE2()
{
    let myobject={name:"Madras"};
    let newObject=myobject;
    myobject.name="Chennai";
    let myarray=["a","e","i","o"];
    let vowelArray=myarray;
    myarray.push("u")
    console.log(myobject);
    console.log(myarray);
    alert("Check the console output!");
}
const M =()=>
{
    return(
        <div>
                <h1>Let we see the output of JAVASCRIPT</h1>
                <button onClick={CE2}>DAY1 CE2</button>
        </div>
    );
};
export default M;
