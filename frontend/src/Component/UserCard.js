import React from "react";
import axios from "axios";
import Update from "./Update";
import { useState } from "react";


import "../Css/User-card.css"

export default function Card({id,first_name,last_name,email,gender,domain,avatar,setupdate}){
    const [isPopupOpen, setPopupOpen] = useState(true);
  


    const collectdata =async (e) => { 
       
        console.log("registration started")
      
        await axios.post('http://localhost:5000/team',{    name: `${first_name} ${last_name}`,
        memberIds: [id],},{withCredentials:true})
        .then((res)=>{alert("team member added")
     
      })
        .catch((err)=>{console.log("GADBAD HO GYA BHAIII ")})
    }


    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
      };
    const Removetask = async() => {
    
          await axios.delete(`http://localhost:5000/remove/${id}`,{withCredentials:true})
            .then((res)=>{console.log("connected")
            setupdate((prevdata)=>!prevdata);
        
            })
            .catch((err)=>{console.log("error while deleting")});
        
         } 

   
   
    return(
        <>
        <div class="card">
       <img src={avatar} class="user-photo" alt=""/>
       <h5>{first_name}{last_name}</h5>
       <img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/plus-math.png" alt="plus-math"  id="plus" onClick={collectdata}/>
       <div>
        <ul>
            <li>{email}</li>
            
            <li>{domain}</li>
            <li> male</li>
            
        </ul>
       </div>
       <div className="d-flex">
       <img width="34" height="34" src="https://img.icons8.com/arcade/64/filled-trash.png" alt="filled-trash" onClick={Removetask}/>
    
      
       {isPopupOpen?<>  <img width="34" height="34" src="https://img.icons8.com/arcade/64/installing-updates.png" alt="installing-updates"  onClick={togglePopup}/></>
       :
       <>
       <Update
        id={id}
        onClick={togglePopup}
       />
       
       </>


       }
       </div>
        </div>

        {/* cards*/ }
        
        
        
        </>
    )
}