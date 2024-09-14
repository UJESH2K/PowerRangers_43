const { signIn, signUp, updateWare } = require("../../common/types");
const { JWT_SECRET } = require("../config");
const { Users } = require("../db");
const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

userRouter.post("/signup", async (req, res) => {
  const { success } = signUp.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const existingUser = await Users.findOne({
    userName: req.body.userName,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }

  const user = await Users.create({
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  const userId = user._id;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res
    .json({
      message: "User created successfully",
      token: token,
    })
    .status(200);
});

userRouter.post("/signin", async (req, res) => {
  const { success } = signIn.safeParse(req.body);
  if (!success) {
    return res.status(200).json({
      message: "Incorrect inputs",
    });
  }

  const user = await Users.findOne({
    userName: req.body.userName,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    return res.status(200).json({
      token: token,
    });
  }
  return res.status(404).json({
    message: "Error while loggin in!",
  });
});

module.exports = {
  userRouter,
};
