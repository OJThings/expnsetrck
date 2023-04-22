import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import IncomeItem from "../IncomeItem/IncomeItem";
import SavingsForm from "./SavingsForm";
import { SavingsStyled } from "./SavingsStyled";
function Savings() {
  const { savings, getSavings, deleteSavings, totalSavings } =
    useGlobalContext();

  useEffect(() => {
    getSavings();
  }, []);
  return (
    <SavingsStyled>
      <InnerLayout>
        <h1>Savings</h1>
        <h2 className="total-income">
          Total Savings: <span>₱{totalSavings()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <SavingsForm />
          </div>
          <div className="incomes">
            {savings.map((saving) => {
              const { _id, title, amount, date, category, description, type } =
                saving;
              console.log(saving);
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteSavings}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </SavingsStyled>
  );
}

export default Savings;
