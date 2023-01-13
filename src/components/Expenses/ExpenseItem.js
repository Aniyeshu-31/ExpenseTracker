import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import TimeComponent from './TimeComponent.js';
function ExpenseItem(props) {
    // const expenseDate=new Date(2021,9,26);
    // const expenseTitle='Car_Insurance';
    // const expenseAmount= 294.47;
  //  const clickhandler=()=>{
  //   // title='Updated!!';
  //   setTitle('updated!!');
  //   console.log(title);
  //  }
  return (
    <Card className='expense-item'>
      <TimeComponent date={props.date}></TimeComponent>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>₹{props.amount}</div>   
      </div>
    </Card>
  );
}

export default ExpenseItem;
