const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/register", async (req,res)=>{

const {username,email,password} = req.body;

const hash = await bcrypt.hash(password,10);

const user = new User({

username,
email,
password:hash

});

await user.save();

res.send("Registered Successfully");

});

router.post("/login", async (req,res)=>{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){

return res.send("User not found");

}

const valid = await bcrypt.compare(password,user.password);

if(!valid){

return res.send("Wrong password");

}

res.redirect("/dashboard.html");

});

module.exports = router;