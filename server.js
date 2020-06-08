const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const items = require("./routes/api/items");

//BODYPARSER MIDDLEWARE

app.use(bodyParser.json());

//MONGODB
mongoose.connect("mongodb://localhost:27017/SHOPPING_LIST", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("we are connected!");
});

//USE ROUTES
app.use("/api/items", items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
