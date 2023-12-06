import React from 'react';
import  { BrowserRouter as Router,Switch,Route, BrowserRouter, Routes} from "react-router-dom";


import './App.css';
import NewUser from './Component/Newuser';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Update from './Component/Update';
import Userprofile from './Component/Userprofile';


function App() {
  return (
    
    
   <BrowserRouter>
<Navbar/>
<Routes>
 
  <Route path='/' element ={<Home/>} />
   <Route  path ='/Newuser' element ={<NewUser/>} /> 
    <Route path='/Update/:id' element={<Update/>} />
   <Route path='/Userprofile/:userid' element={<Userprofile/>} />
  </Routes>
   </BrowserRouter>

    
  );
}

export default App;
