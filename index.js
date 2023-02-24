require("dotenv").config();
const express = require('express');
const session = require('express-session');
const router = require('./client/router')
const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views','./client/views');

app.use(express.static('client/public'));

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on ${process.env.HOST}:${process.env.PORT}`);
});
