const User = require("../models/User");
const path = require("path");

const home = (req, res) => {
  res.render("home", {
    title: "Home",
  });
};

const show = (req, res) => {
  User.find({}, (err, data) => {
    res.render("show", {
      title: "show",
      data,
    });
  });
};

const saveData = (req, res) => {
  const img = req.files.image;
  img.mv(path.resolve(__dirname, "../assets/images", img.name), (err) => {
    User.create({ ...req.body, image: img.name }, (err, product) => {
      console.log(product);
      res.redirect("show");
    });
  });
};

module.exports = { home, saveData, show };
