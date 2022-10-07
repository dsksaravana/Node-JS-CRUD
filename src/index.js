// importing the dependencies
const express = require("express");
(app = express()),
  (mongoose = require("mongoose")),
  (Task = require("./api/models/todoListModel")), //created model loading here
  (bodyParser = require("body-parser"));

port = process.env.PORT || 3000;

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

app.listen(port, async () => {
  console.log("listening on port " + port);
});
