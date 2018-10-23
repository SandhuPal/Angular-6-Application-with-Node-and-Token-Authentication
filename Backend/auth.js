const User = require("./models/user.js");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jwt-simple");
const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const userData = req.body;

  var user = new User(userData);

  user.save((err, newUser) => {
    if (err) return res.status(500).send({ message: "Error Saving user" });

    const payload = { sub: newUser._id };

    const token = jwt.encode(payload, "123");

    res.status(200).send({ token });
  });
}),
  router.post("/login", async (req, res) => {
    const loginData = req.body;

    const user = await User.findOne({ email: loginData.email });

    if (!user) return res.status(401).send({ message: "Email invalid" });

    bcrypt.compare(loginData.pwd, user.pwd, (err, isMatch) => {
      if (!isMatch) res.status(401).send({ message: "password invalid" });

      const payload = { sub: user._id };

      const token = jwt.encode(payload, "123");

      res.status(200).send({ token });
    });
  });
const auth = {
  router,
  checkAuthanticated: (req, res, next) => {
    if (!req.header("authorization"))
      return res.status(401).send({ message: "unauthorized  missing header" });

    const token = req.header("authorization").split(" ")[1];

    console.log(token);

    const payload = jwt.decode(token, "123");

    if (!payload)
      return res
        .status(401)
        .send({ message: "unauthorized  Auth header invalid" });

    req.userId = payload.sub;
    next();
  }
};
module.exports = auth;
