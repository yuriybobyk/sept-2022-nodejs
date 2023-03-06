import express, { Request, Response } from "express";
import * as mongoose from "mongoose";

import { User } from "./models/User.model";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", async (req: Request, res: Response) => {
  const users = await User.find();

  res.json(users);
});

app.get("/users/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);

  res.json(user);
});

app.post("/users", async (req, res) => {
  const body = req.body;
  const user = await User.create({ ...body });

  res.status(201).json({
    message: "User created!",
    data: user,
  });
});
//
app.put("/users/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = req.body;

  const updatedUser = await User.updateOne({ _id: userId }, user);

  res.status(200).json({
    message: "User updated",
    data: updatedUser,
  });
});
//
app.delete("/users/:userId", async (req, res) => {
  const { userId } = req.params;

  await User.deleteOne({ _id: userId });

  res.status(200).json({
    message: "User deleted",
  });
});

app.get("/welcome", (req, res) => {
  res.send("WELCOME");
});

// app.post()
// app.put()
// app.patch()
// app.delete()

const PORT = 5100;

app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/sept-2022");
  console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
});
