import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import MonthlyForm from "./MonthlyForm";
import { MonthlyStyled } from "./MonthlyStyled";
import MonthlyItem from "./MonthlyItem";

function Monthly() {
  const { monthly, getMonthly, deleteMonthly, totalMonthly } =
    useGlobalContext();

  useEffect(() => {
    getMonthly();
  }, []);
  return (
    <MonthlyStyled>
      <InnerLayout>
        <h1>Monthly</h1>
        <h2 className="total-income">
          Total Monthly: <span>₱{totalMonthly()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <MonthlyForm />
          </div>
          <div className="incomes">
            {monthly.map((monthly) => {
              const { _id, title, amount, date, category, type } = monthly;
              console.log(monthly);
              return (
                <MonthlyItem
                  key={_id}
                  id={_id}
                  title={title}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteMonthly}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </MonthlyStyled>
  );
}

export default Monthly;
