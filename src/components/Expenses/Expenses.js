import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';
import ExpensesList from "./ExpensesList.js";
import './ExpensesList.css';
import ExpenseFilter from "./ExpenseFilter.js";
function Expenses(props){
    const[filteredyear,setFilterYear] = useState('2022');
    const FilterChangeHandler=(selectedyear)=>{
        // console.log('Expenses.js');
        // console.log(selectedyear);
        setFilterYear(selectedyear);
    }

    const filteredExpense = props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredyear;
    })

    
   return (
    <li>
    <Card className="expenses">
    <ExpenseFilter selected={filteredyear} onChangeFilter={FilterChangeHandler} />   
    <ExpensesChart expense={filteredExpense}/>
     <ExpensesList items={filteredExpense}/>
   </Card>
   </li>
    );  
}

export default Expenses;