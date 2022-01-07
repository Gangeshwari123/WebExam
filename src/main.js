const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { sendMessage, showMessage } = require("./user");

app.get("/users", async (req, res) => {
  let list = await showMessage();
  res.json(list);
});

app.post("/add-chat", async (req, res) => {
  const user = req.body;
  await sendMessage(user);
  res.json({ message: "Chat added...!!" });
});

app.listen(2000, () => console.log("Server Started.."));
