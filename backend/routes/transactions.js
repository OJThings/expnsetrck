const {
  addExpense,
  getExpense,
  deleteExpense,
  deleteAllExpense,
} = require("../controllers/expense");
const {
  addIncome,
  getIncomes,
  deleteIncome,
  deleteAllIncome,
} = require("../controllers/income");
const {
  addMonthly,
  getMonthly,
  deleteMonthly,
} = require("../controllers/monthly");
const {
  addSavings,
  getSavings,
  deleteSavings,
} = require("../controllers/savings");

const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .post("/add-expense", addExpense)
  .post("/add-savings", addSavings)
  .post("/add-monthly", addMonthly)
  .get("/get-monthly", getMonthly)
  .get("/get-expenses", getExpense)
  .get("/get-savings", getSavings)
  .get("/get-incomes", getIncomes)
  .delete("/delete-monthly/:id", deleteMonthly)
  .delete("/delete-income/:id", deleteIncome)
  .delete("/delete-expense/:id", deleteExpense)
  .delete("/delete-savings/:id", deleteSavings)
  .delete("/delete-all-expense", deleteAllExpense)
  .delete("/delete-all-income", deleteAllIncome);

module.exports = router;
