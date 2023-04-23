import React from "react";
import { trash } from "../../utils/Icons";
import Button from "../Button/Button";
import { IncomeItemStyled } from "../IncomeItem/IncomeStyled";

function Deleter({ deleteItem, indicatorColor }) {
  return (
    <IncomeItemStyled indicator={indicatorColor}>
      <div className="content">
        <div className="inner-content">
          <h5>Delete History</h5>
          <div className="btn-con">
            <Button
              icon={trash}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--color-delete"}
              color={"#fff"}
              iColor={"#fff"}
              hColor={"var(--color-delete)"}
              onClick={() => deleteItem()}
            />
          </div>
        </div>
      </div>
    </IncomeItemStyled>
  );
}
export default Deleter;