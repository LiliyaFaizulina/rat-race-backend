const express = require("express");
const controller = require("../controllers/credits");
const { validateBody, authenticate } = require("../midlewares");
const { schemas } = require("../models/credit");
const router = express.Router();

router.get("/", authenticate, controller.getCredits);
router.put(
  "/:creditId",
  authenticate,
  validateBody(schemas.updateSchema),
  controller.updateCredit
);
router.post(
  "/",
  authenticate,
  validateBody(schemas.addCredit),
  controller.addCredit
);
router.delete("/:creditId", authenticate, controller.deleteCredit);

module.exports = router;
