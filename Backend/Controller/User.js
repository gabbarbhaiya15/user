const express = require('express');
const Userdata = require('../Models/Usercollection')
const jwt = require('jsonwebtoken')
const cookieParser  = require('cookie-parser');
const router =express.Router();

router.post('/', async (req, res) => {
    console.log('register')
const {first_name, last_name,email,gender,domain,avatar} = req.body;

await Userdata.create({first_name, last_name,email,gender,avatar,domain})


})
module.exports = router;