// const bcryptjs = require("bcryptjs");
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });

require("./db/connection");

//json format
app.use(express.json());

//cookie
app.use(cookieParser());
//router link
app.use(require("./router/auth"));

const User = require("./model/userschema");

const PORT = process.env.PORT || 8000;
// "mongodb+srv://sagar:sagar123@cluster0.oiaht.mongodb.net/mernstack?retryWrites=true&w=majority";

//middleware
const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};
app.get("/", (req, res) => {
  res.send("home");
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

app.get("/signup", (req, res) => {
  res.send("signup");
});

app.get("/signin", (req, res) => {
  res.send("signin");
});

app.listen(PORT, (req, res) => {
  //res.send(`listen on port 3000`);
  console.log(`listening at port ${PORT}`);
});
