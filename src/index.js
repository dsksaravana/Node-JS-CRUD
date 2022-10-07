// importing the dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Task = require("./api/models/todoListModel"); //created model loading here
const bodyParser = require("body-parser");
var cors = require("cors");

port = process.env.PORT || 8888;

app.use(
  cors({ origin: ["http://localhost:3001", "http://127.0.0.1:3001" + port] })
);

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/todoListRoutes"); //importing route
routes(app); //register the route

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port, async () => {t
  console.log("listening on port " + port);
});
