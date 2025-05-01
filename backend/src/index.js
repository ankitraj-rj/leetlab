import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("this is your port",process.env.PORT)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
