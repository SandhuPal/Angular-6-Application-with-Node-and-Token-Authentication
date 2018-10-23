const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user.js");
const Post = require("./models/post.js");
const Event = require("./models/events.js");
const auth = require("./auth.js");
const app = express();
const jwt = require("jwt-simple");

mongoose.Promise = Promise;

app.use(cors());
app.use(bodyParser.json());

app.get("/posts/:id", async (req, res) => {
  const author = req.params.id;
  const posts = await Post.find({ author });
  res.send(posts);
});

app.post("/post", auth.checkAuthanticated, (req, res) => {
  const postData = req.body;
  postData.author = req.userId;

  const post = new Post(postData);

  post.save((err, result) => {
    if (err) {
      consolue.error("saving post error");
      return res.status(500).send({ message: "saving post error" });
    }
    res.sendStatus(200);
  });
});

app.get("/events/:id", async (req, res) => {
  //   try {
  //     console.log(req.userId);
  //     const events = await Event.find({}, "-pwd -__v");
  //     res.send(events);
  //   } catch (error) {
  //     console.error(error);
  //     res.sendStatus(500);
  //   }

  const author = req.params.id;
  const events = await Event.find({ author });
  res.send(events);
});

app.post("/event", auth.checkAuthanticated, (req, res) => {
  const postData = req.body;
  postData.author = req.userId;

  const event = new Event(postData);

  event.save((err, result) => {
    if (err) {
      consolue.error("saving event error");
      return res.status(500).send({ message: "saving event error" });
    }
    res.sendStatus(200);
  });
});

app.get("/users", async (req, res) => {
  try {
    console.log(req.userId);
    const users = await User.find({}, "-pwd -__v");
    res.send(users);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get("/profile/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "-pwd -__v");
    res.send(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
app.get("/post/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "-pwd -__v");
    res.send(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

mongoose.connect(
  "mongodbpath",
  { useNewUrlParser: true },
  err => {
    if (!err) console.log("connected");
  }
);

app.use("/auth", auth.router);

app.listen(process.env.PORT || 3000, () =>
  console.log("Example app listening on port 3000!")
);
