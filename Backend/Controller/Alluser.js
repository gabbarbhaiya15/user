const express = require('express');
const Userdata = require('../Models/Usercollection');
const router= express.Router();
 router.get('/', async (req, res) => {

Userdata.find()
.then((user)=>{
    res.status(200).json(user);
})
.catch((error)=>{console.log("error in  getting post")})

 })
module.exports = router;