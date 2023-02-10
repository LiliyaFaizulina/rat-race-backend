const express = require("express");
const controller = require("../controllers/equities");
const { validateBody, authenticate } = require("../midlewares");
const { schemas } = require("../models/equity");
const router = express.Router();

router.get("/", authenticate, controller.getEquities);
router.put(
  "/:equityId",
  authenticate,
  validateBody(schemas.updateSchema),
  controller.updateEquity
);
router.post(
  "/",
  authenticate,
  validateBody(schemas.addEquity),
  controller.addEquity
);
router.delete("/:equityId", authenticate, controller.deleteEquity);

module.exports = router;
