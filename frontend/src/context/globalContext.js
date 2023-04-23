import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState([]);
  const [monthly, setMonthly] = useState([]);
  const [error, setError] = useState(null);

  //calculate incomes
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes();
  };

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
    console.log(response.data);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const deleteAllIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-all-income`);
    getIncomes();
  };
  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  //calculate incomes
  const addExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`);
    setExpenses(response.data);
    console.log(response.data);
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };
  
  const deleteAllExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-all-expense`);
    getExpenses();
  };

  const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  //calculate savings
  const addSavings = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-savings`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getSavings();
  };

  const getSavings = async () => {
    const response = await axios.get(`${BASE_URL}get-savings`);
    setSavings(response.data);
    console.log(response.data);
  };

  const deleteSavings = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-savings/${id}`);
    getSavings();
  };

  const totalSavings = () => {
    let totalSavings = 0;
    savings.forEach((saving) => {
      totalSavings = totalSavings + saving.amount;
    });

    return totalSavings;
  };

  //Monthly Expense Storage
  const addMonthly = async (monthly) => {
    const response = await axios
      .post(`${BASE_URL}add-monthly`, monthly)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getMonthly();
  };

  const getMonthly = async () => {
    const response = await axios.get(`${BASE_URL}get-monthly`);
    setMonthly(response.data);
    console.log(response.data);
  };

  const deleteMonthly = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-monthly/${id}`);
    getMonthly();
  };

  const totalMonthly = () => {
    let totalMonthly = 0;
    monthly.forEach((month) => {
      totalMonthly = totalMonthly + month.amount;
    });

    return totalMonthly;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses, ...savings];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        addExpense,
        addSavings,
        addMonthly,
        getIncomes,
        getExpenses,
        getSavings,
        getMonthly,
        deleteIncome,
        deleteExpense,
        deleteAllExpense,
        deleteAllIncome,
        deleteSavings,
        deleteMonthly,
        totalIncome,
        totalSavings,
        totalExpenses,
        totalBalance,
        totalMonthly,
        transactionHistory,
        incomes,
        expenses,
        savings,
        monthly,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
