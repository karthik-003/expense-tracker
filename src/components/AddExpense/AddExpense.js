
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=>{
    

    const saveExpenseDataHandler = (enteredExpeseData)=>{
        const expenseData = {
            ...enteredExpeseData,
            id: Math.random().toString()
        }
        //console.log(expenseData);
        props.onAddExpense(enteredExpeseData);
    }

    return (
        <div>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideForm={()=>{props.hideForm()}}/>
        </div>
    )
}


export default NewExpense;