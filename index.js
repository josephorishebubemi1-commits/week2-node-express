const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("My Week 2 API!");
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  res.json({ message: `Hello, ${name}!` });
});

app.get("/user/:id", (req, res) => {
  res.send(`User ${req.params.id} profile`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
