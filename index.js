const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!yeeee 1231sdads23123");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/users", (req, res) => {
  const user = res.body;
  res.json({ message: "User created!", user });
});
