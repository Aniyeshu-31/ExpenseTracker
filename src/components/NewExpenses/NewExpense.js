import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense= (props)=>{
   const[isEditing,setIsEditing]=useState(false);
   const SaveExpenseDataHandler=(enteredExpenseData)=>{
       const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
       };
          props.onAddExpense(expenseData);
          setIsEditing(false);
    };
    const setclickHandler = ()=>{
      setIsEditing(true);
    };
    const StopclickHandler = ()=>{
      setIsEditing(false);
    };
     return (
        <div className="new-expense">
      {!isEditing && (<button onClick={setclickHandler}>Add New Expense</button>)}
      {isEditing  && (<ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}
      onCancel={StopclickHandler} />)}
        </div>
     )
}

export default NewExpense;