const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Gamer } = require("../../models/gamer");
const { HttpError } = require("../../helpers");

require("dotenv").config();

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { name, password } = req.body;
  const gamer = await Gamer.findOne({ name });
  if (gamer) {
    throw HttpError(409, "Name in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newGamer = await Gamer.create({
    name,
    password: hashPassword,
  });
  const id = newGamer._id;
  const token = jwt.sign({ id }, SECRET_KEY, { expiresIn: "7d" });
  await Gamer.findByIdAndUpdate(id, { token });
  res.status(201).json({
    gamer: {
      id,
      name,
      position: newGamer.position,
      dream: newGamer.dream,
      dreamCost: newGamer.dreamCost,
      debt: newGamer.debt,
      children: newGamer.children,
    },
    token,
  });
};

const login = async (req, res) => {
  const { name, password } = req.body;
  const gamer = Gamer.findOne({ name });
  if (!gamer) {
    throw HttpError(400, "Wrong name");
  }

  const passwordCompare = await bcrypt.compare(password, gamer.password);
  if (!passwordCompare) {
    throw HttpError(400, "Wrong password");
  }

  const id = gamer._id;
  const token = jwt.sign({ id }, SECRET_KEY, { expiresIn: "7d" });
  await Gamer.findByIdAndUpdate(id, { token });
  res.json({
    gamer: {
      id,
      name,
      position: gamer.position,
      dream: gamer.dream,
      dreamCost: gamer.dreamCost,
      debt: gamer.debt,
      children: gamer.children,
    },
    token,
  });
};

const refreshGamer = async (req, res) => {
  const { _id, name, position, dream, dreamCost, debt, children, token } =
    req.gamer;
  res.json({
    gamer: {
      id: _id,
      name,
      position,
      dream,
      dreamCost,
      debt,
      children,
    },
    token,
  });
};

const logout = async (req, res) => {
  const { _id } = req.gamer;
  await User.findByIdAndUpdate(_id, { token: "" });
  res.json({
    message: "Logout success",
  });
};

module.exports = {
  login,
  register,
  refreshGamer,
  logout,
};
