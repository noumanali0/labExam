const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const userController = require("./controllers/usercontroller");

function dbConnection() {
  mongoose
    .connect("mongodb://localhost:27017/labExam")
    .then(() => console.log("db is connected"));
}

dbConnection();

const PORT = 5000;
const app = express();

app.use(fileUpload());

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "assets")));

app.get("/", userController.home);
app.get("/show", userController.show);

app.get("/edit", userController.editUser);

app.post("/updatedata/:id", userController.updateUser);

app.post("/adduser", userController.saveData);

app.listen(PORT, () => {
  console.log("listening on " + PORT);
});
