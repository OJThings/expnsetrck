import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import SavingsForm from './SavingsForm';

function Savings() {
    const {addIncome,savings, getSavings, deleteSavings, totalSavings} = useGlobalContext()

    useEffect(() =>{
        getSavings()
    }, [])
    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>Savings</h1>
                <h2 className="total-income">Total Savings: <span>₱{totalSavings()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <SavingsForm />
                    </div>
                    <div className="incomes">
                        {savings.map((saving) => {
                            const {_id, title, amount, date, category, description, type} = saving;
                            console.log(saving)
                            return <IncomeItem
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
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
`;

export default Savings