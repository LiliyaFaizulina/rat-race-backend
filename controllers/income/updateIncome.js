const { Income } = require("../../models/income");

const updateIncome = async (req, res) => {
  const { incomeId } = req.params;
  const income = await Income.findByIdAndUpdate(incomeId, req.body, {
    new: true,
  });
  res.json(income);
};

module.exports = updateIncome;
