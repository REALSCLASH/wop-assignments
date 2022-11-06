"use strict";
// userController
const { getAllUsers, getUser, addUser } = require("../models/userModel");

const user_list_get = async (req, res) => {
  res.json(await getAllUsers());
};

const user_get = async (req, res) => {
  const user = await getUser(req.params.id);
  if (user.length > 0) {
    res.send(user.pop());
  } else {
    res.send("Virhe");
  }
};

const user_post = (req, res) => {
  console.log("user_post", req.body);
  res.send("Add user route");
};

const user_create = async (req, res) => {
  console.log("user_create", req.body);
  const userData = [req.body.name, req.body.email, req.body.passwd];

  const result = await addUser(userData);
  if (result.affectedRows > 0) {
    res.json({
      message: "user added",
      user_id: result.insertId,
    });
  } else {
    res.send("virhe");
  }
};

module.exports = {
  user_list_get,
  user_get,
  user_post,
  user_create,
};