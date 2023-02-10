const express = require("express");
const controller = require("../controllers/gamer");
const { validateBody, authenticate } = require("../midlewares");
const { schemas } = require("../models/gamer");
const router = express.Router();

router.post("/register", validateBody(schemas.authSchema), controller.register);
router.post("/login", validateBody(schemas.authSchema), controller.login);
router.get("/gamer", authenticate, controller.refreshGamer);
router.get("/logout", authenticate, controller.logout);
router.put(
  "/gamer",
  authenticate,
  validateBody(schemas.updateGamer),
  controller.updateGamer
);

module.exports = router;
