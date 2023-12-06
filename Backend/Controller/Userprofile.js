const express = require('express');
const Userdata = require('../Models/Usercollection')
const router = express.Router();
router.get('/:id', async (req,res)=>{
    const id = req.params.id
    console.log(id);
 await Userdata.findOne({_id:req.params.id})

 .select("-password")
 .then((user)=>{
    console.log(user)
 })

 .catch((err)=>{res.status(401).json("user not found" )})


})
module.exports = router