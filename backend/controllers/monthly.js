const MonthlySchema = require("../models/MonthlyModel");

exports.addMonthly = async (req, res) => {
  const { title, amount, category, date } = req.body;

  const monthly = MonthlySchema({
    title,
    amount,
    category,
    date,
  });

  try {
    //validations
    // || !description
    if (!title || !category || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }
    await monthly.save();
    res.status(200).json({ message: "Savings Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }

  console.log(monthly);
};

exports.getMonthly = async (req, res) => {
  try {
    const monthly = await MonthlySchema.find().sort({ createdAt: -1 });
    res.status(200).json(monthly);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteMonthly = async (req, res) => {
  const { id } = req.params;
  MonthlySchema.findByIdAndDelete(id)
    .then((month) => {
      res.status(200).json({ message: "Monthly Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
