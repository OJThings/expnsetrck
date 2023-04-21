const SavingsSchema = require("../models/SavingsModel");

exports.addSavings = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const saving = SavingsSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    //validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }
    await saving.save();
    res.status(200).json({ message: "Savings Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }

  console.log(saving);
};

exports.getSavings = async (req, res) => {
  try {
    const savings = await SavingsSchema.find().sort({ createdAt: -1 });
    res.status(200).json(savings);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteSavings = async (req, res) => {
  const { id } = req.params;
  SavingsSchema.findByIdAndDelete(id)
    .then((saving) => {
      res.status(200).json({ message: "Savings Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
