import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { InnerLayout } from "../../styles/Layouts";
import { peso } from "../../utils/Icons";
import Chart from "../Chart/Chart";
import { DashboardStyled } from "./DashboardStyled";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    savings,
    totalIncome,
    totalBalance,
    totalSavings,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {peso} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {peso} {totalExpenses()}
                </p>
              </div>

              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {peso} {totalBalance()}
                </p>
              </div>
              <div className="savings">
                <h2>Total Savings</h2>
                <p>
                  {peso} {totalSavings()}
                </p>
              </div>
              
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Salary</span>Max
            </h2>
            <div className="salary-item">
              <p>₱{Math.min(...incomes.map((item) => item.amount))}</p>
              <p>₱{Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="salary-item">
              <p>₱{Math.min(...expenses.map((item) => item.amount))}</p>
              <p>₱{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Savings</span>Max
            </h2>
            <div className="salary-item">
              <p>₱{Math.min(...savings.map((item) => item.amount))}</p>
              <p>₱{Math.max(...savings.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}


export default Dashboard;
