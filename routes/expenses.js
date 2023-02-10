const express = require("express");
const controller = require("../controllers/expenses");
const { validateBody, authenticate } = require("../midlewares");
const { schemas } = require("../models/expense");
const router = express.Router();

router.get("/", authenticate, controller.getExpenses);
router.put(
  "/:expenseId",
  authenticate,
  validateBody(schemas.updateExpenseSchema),
  controller.updateExpense
);
router.post(
  "/",
  authenticate,
  validateBody(schemas.addExpenseSchema),
  controller.addExpense
);
router.delete("/:expenseId", authenticate, controller.deleteExpense);

module.exports = router;
