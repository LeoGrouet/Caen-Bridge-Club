require("dotenv").config();
const express = require("express");
const session = require("express-session")
const { connectDB } = require("./serveur/services/database");
const bodyParser = require("body-parser");
const router = require("./serveur/routes/router");
const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./client/views");

connectDB().catch((err) => console.log(err));

app.use(express.static("client/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(router);

app.listen(port, () => {
  console.log(`Server Listening on ${process.env.HOST}:${process.env.PORT}`);
});
