const express = require("express");
const { signup, login } = require("../Controller/Usercontroller");
const router=express.Router();
router.post('/Signup',signup)
router.post('/login',login)
module.exports=router