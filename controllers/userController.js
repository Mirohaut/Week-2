'use strict';

const userModel = require('../models/userModel');

const users = userModel.users;

const user_get_by_id = async (req, res) => {
    const user = await userModel.getUser(req.params.id);
    res.json(user);
};


const user_post_new_user = async (req, res) => {
    const user = await userModel.addUser(req.body);
    res.json(user);
};

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};


module.exports = {
  user_list_get,
  user_get_by_id,
  user_post_new_user,
};
