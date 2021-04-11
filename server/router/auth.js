const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("heloo from router");
});

require("../db/connection");
const User = require("../model/userschema");

//register user
router.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz filled all fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "email already exists" });
    } else if (password !== cpassword) {
      return res.status(400).json({ error: "password doesnt match" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      //hashing of password check userschema "pre" function middleware
      const registerUser = await user.save();

      return res.status(201).json({ message: "data saved succesfully" });
    }
  } catch (error) {
    console.log(error);
  }

  // res.json({ message: req.body });
});

//login user
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  //checck if empty username or email
  if (!email || !password) {
    res.status(400).json({ error: "wrong input enter" });
  }
  try {
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);

    if (userLogin) {
      //check password that is hash
      const isMatch = await bcrypt.compare(password, userLogin.password);
      //token generaton
      const token = await userLogin.generateAuthToken();
      //   console.log(token);

      //cookies to store jwt
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "inValid creditials " });
      } else {
        res.status(200).json({ message: "login successfully" });
      }
    } else {
      res.status(400).json({ error: "inValid creditials " });
    }
    // //check if email exits in database
    // if (!isMatch) {
    //   res.status(400).json({ error: "inValid creditials " });
    // } else {
    //   res.status(200).json({ message: "login successfully" });
    // }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
