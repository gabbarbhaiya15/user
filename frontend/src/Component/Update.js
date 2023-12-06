import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Newuser.css";
export default function Update({id}){
const [first_name,setfirst_name]= useState("");
const [last_name,setlast_name]= useState("");
const [email,setemail]= useState("");
const [domain,setdomain]= useState("");
const [gender,setgender]= useState("");

const  Edit = async() => {
    console.log("yes");
 await axios.put(`http://localhost:5000/update/${id}`,{first_name,last_name,email,domain},{withCredentials:true})
 .then((response) =>{console.log("connect")})
 .catch((error) => {console.log(error)});
   }




return(
    <>
    
    <form class="form">
    <p class="title">Update </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input placeholder="" type="text" class="input"value={first_name} onChange = {(e)=>  setfirst_name(e.target.value) }/>
            <span>Firstname</span>
        </label>

        <label>
            <input placeholder="" type="text" class="input" value={last_name} onChange = {(e)=>  setlast_name(e.target.value) }/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input  placeholder="" type="email" class="input" value={email} onChange = {(e)=>  setemail(e.target.value) }/>
        <span>Email</span>
    </label> 
        
    <label>
        <input  placeholder="" type="text" class="input"value={gender} onChange = {(e)=>  setgender(e.target.value) }/>
        <span>Gender</span>
    </label>
    <label>
        <input  placeholder="" type="text" class="input"value={domain} onChange = {(e)=>  setdomain(e.target.value) }/>
        <span>Domain</span>
    </label>
    <button class="submit" onClick={()=>Edit()}>Update</button>
</form>
    
    
    </>
)
}