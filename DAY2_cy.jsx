import React from "react";
const Cy=()=>{
    return(
        <div style={{backgroundColor:"lightgray",
                    padding:"10px",
                    textAlign:"center",
                    alignItems:"center",
                    justifyContent:"center",
                    display:"flex",
                    flexDirection:"column",
        }}>
            <h1>Car and Location Info</h1>
            <p style={{textAlign:"center",
            backgroundColor:"white",
                        padding:"100px",
                        fontFamily:"monospace",
                        fontSize:"30px",
                        border:"solid",
                        borderRadius:"2px",

            }}>Tesla Model S</p><br></br><br></br>
            <img src="/car_image.png"></img><br></br>
            <p style={{backgroundColor:"white",
                        padding:"100px",
                        fontSize:"30px",
                        textAlign:"center",
                        fontFamily:"monospace",
                        border:"solid",
                        borderColor:"black"


            }}>Tesla<br></br><br></br>Palo Alto</p>
        </div>
    );
};
export default Cy;
