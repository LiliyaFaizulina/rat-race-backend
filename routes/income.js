const express = require("express");
const controller = require("../controllers/income");
const { validateBody, authenticate } = require("../midlewares");
const { schemas } = require("../models/income");
const router = express.Router();

router.get("/", authenticate, controller.getIncome);
router.put(
  "/:incomeId",
  authenticate,
  validateBody(schemas.updateIncomeSchema),
  controller.updateIncome
);
router.post(
  "/",
  authenticate,
  validateBody(schemas.addIncomeSchema),
  controller.addIncome
);
router.delete("/:incomeId", authenticate, controller.addIncome);

module.exports = router;
