const { JWT_SECRET } = require("../config");
const { Users } = require("../db");
const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

userRouter.post("/signup", async (req, res) => {
  const user = await Users.create({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });
  const userId = user._id;

  const token = jwt.sign({ userId }, JWT_SECRET);

  return res.status(200).json({
    message: "User successfully created!",
    token: token,
  });
});

module.exports = {
  userRouter,
};
