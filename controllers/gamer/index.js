const { register, login, refreshGamer, logout } = require("./auth");
const { updateGamer } = require("./updateGamer");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  refreshGamer: ctrlWrapper(refreshGamer),
  logout: ctrlWrapper(logout),
  updateGamer: ctrlWrapper(updateGamer),
};
