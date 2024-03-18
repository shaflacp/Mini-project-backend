const express = require("express");
const { signup } = require("../../frontend/src/Services/Userapi");
const router=express.Router();
router.post('/signup')
