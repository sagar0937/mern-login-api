const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Authenticate = require("../middleware/authecate");

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
  } catch (error) {
    console.log(error);
  }
});

//about us page using middleware
router.get("/about", Authenticate, (req, res) => {
  res.send(req.rootUser);
  // console.log("about", req.rootUser);
});

//contact us page using middleware
router.get("/getdata", Authenticate, (req, res) => {
  res.send(req.rootUser);
});

//contact  us page using middleware for message feild
router.post("/contact", Authenticate, async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(401).json("error plz fill fields");
  }
  const messageContact = await User.findOne({ _id: req.id });
  if (messageContact) {
    const userMessage = await messageContact.addContactMessage(
      name,
      email,
      phone,
      message
    );
    if (!userMessage) {
      return res
        .status(403)
        .json({ error: "error in contact us page message" });
    }
    await messageContact.save();
    //alert("success");
    res.status(201).json(userMessage);
  }
});

//logout route--to clear cookie/jwttoken
router.get("/logout", (req, res) => {
  res.clearCookie("jwttoken", { path: "/" });
  res.status(200).send("User Logout");
});

module.exports = router;
