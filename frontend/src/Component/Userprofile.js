import react, { useEffect, useState } from 'react';
import Card from './UserCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';




export default function Userprofile(){
    const {userid} = useParams();
    const  [data,setdata] = useState("");
    useEffect(()=>{
  
        axios.get(`http://localhost:5000/Userprofile/${userid}`,{withCredentials:true})
        
        .then((result)=>{
          
         const dataarray = result.data.map(item=>item)
         setdata(dataarray)
        
        })
        .catch((err)=>{})
         },[]) 
    return(
        <>

{data.map((d,i)=>(
  <div className=" " key={i} >
   <div>
    <Card
    id={d.id}
    first_name={d.first_name}
    last_name={d.last_name}
    email={d.email}
    domain={d.domain}
    avatar={d.avatar}
    
    />
</div>

  </div>
))}



        </>
    )
}