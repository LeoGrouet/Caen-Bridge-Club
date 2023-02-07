const express = require("express");
const router = require("router");

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server Listening on ${process.env.HOST}:${process.env.PORT}`);
  });