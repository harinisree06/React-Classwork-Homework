import React, { useState } from 'react';
const Forms=()=>{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
    const handleSubmit =(event) =>{
        event.preventDefault();
        alert(Name: ${name}\nEmail:${email}\nMesaage:${message});
    };
    return(
        <div>

        <form>
            <label>Name:
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            </label>
            <br></br>
            <br></br>
            <label>
                Email:
                <input type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <br></br>
            <br></br>
            <label>
                Message:
                <textarea value={message}
                onChange={(e)=>setMessage(e.target.value)}/>
            </label>
            <br></br>
            <br></br>
            <button type="submit" onClick={handleSubmit}>
            Submit</button>
        </form>
        </div>
    )
  }
  export default Forms;
