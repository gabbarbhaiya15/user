import React, { useState, useEffect } from "react";
import { navigate, Link } from "react-router-dom";
import Card from "./UserCard";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Navbar.css";
;

export default function Navbar() {
  const [search, setsearch] = useState("");
  const [userDetail, setuserDetail] = useState([]);
  const  [pop,setpop] = useState(true)

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allteam');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const toggle = () => {
    setpop(!pop);
  };
 

  const fetchuser = async (query) => {
    setsearch(query);
    await axios
      .post(
        "http://localhost:5000/search",
        { query },
        { withcredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        const dataarray = res.data.map((item) => item);
        console.log(dataarray);
        setuserDetail(dataarray);
      })
      .catch((error) => {
        "error in searching";
      });
  };

  return (
    <>
      {/*  navbar */}
      <div className="d-flex" id="navbar">
        <input
          type="search"
          placeholder="search user"
          id="search"
          value={search}
          onChange={(e) => fetchuser(e.target.value)}
        />
        <ul className="" id="collection">
          {userDetail.map((items) => {
            return (<div id="">
              <Link to={`/Userprofile/${items._id}`}>
                <li className="list-item">{items.first_name}</li>
              </Link>
              </div>
            );
          })}
        </ul>

        <div className="d-flex" id="tagbox">
          <Link to='/' id="tags">
          <img width="34" height="34" src="https://img.icons8.com/arcade/64/home.png" alt="home"/>
          </Link>
          <Link to="/Newuser" id="tags">
          <img width="34" height="34" src="https://img.icons8.com/arcade/64/add-user-male.png" alt="add-user-male"/>
            </Link>
         { pop?<p id="tags" onClick={toggle}> 
         <img width="34" height="34" src="https://img.icons8.com/arcade/64/user-group-man-woman.png" alt="user-group-man-woman"/>
         </p>:<div id="">
         <p id="tags" onClick={toggle}> 
         <img width="34" height="34" src="https://img.icons8.com/arcade/64/user-group-man-woman.png" alt="user-group-man-woman"/>
         </p>
         <div id="box">
          <h1 className="heading">Team</h1>
         <ul className="" id="">
          {users.map((itemss) => {
            return (<div id="">
              <Link to={`/Userprofile/${itemss._id}`}>
                <li className="list">{itemss.name}</li>
              </Link>
              </div>
            );
          })}
        </ul>

         </div>
             
         </div>

         }
        </div>
      </div>
     
    </>
  );
}
