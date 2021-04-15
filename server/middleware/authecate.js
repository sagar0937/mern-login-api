const jwt = require("jsonwebtoken");
const User = require("../model/userschema");
// const cookies = require("cookie-parser");

const Authenticate = async (req, res, next) => {
  try {
    //get token from  cookies frontrnd
    // console.log(" req.cookies", req.cookies);
    const token = req.cookies.jwttoken;
    //verify token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    //get specific that user
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    console.log("rootuser", rootUser);
    if (!rootUser) {
      throw new Error("User not Found");
    }
    req.rootUser = rootUser;
    req.id = rootUser._id;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).send("Unauthorize User");
    console.log(error);
  }
};

module.exports = Authenticate;
