// getting-started.js
require("dotenv").config();
const userRouter = require("./users.js");
const mongoose = require("mongoose");
const express = require("express");
const mongodb_uri = process.env.MONGODB_URI;
const port = process.env.PORT;
const app = express();

app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

main()
  .then(() => console.log("DB was connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongodb_uri);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
