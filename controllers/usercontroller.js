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

const editUser = (req, res) => {
  const { name, id } = req.query;
  res.render("edit", { name, id });
};

const deleteUser = (req, res, next) => {
  User.findByIdAndRemove(req.query.id, (err, doc) => {
    if (err) {
      return console.log("Failed to Delete user Details ");
    }
    return res.redirect("back");
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  User.findByIdAndUpdate(
    id,
    {
      image: req.files.image,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      state: req.body.state,
      city: req.body.city,
      address: req.body.address,
      zip: req.body.zip,
    },
    () => {
      return res.redirect("/show");
    }
  );
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

module.exports = { home, saveData, show, editUser, updateUser, deleteUser };
