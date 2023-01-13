import React ,{useState} from "react";
import './ExpenseForm.css';
const ExpenseForm =(props)=>{
  const [enterTitle,setEnterTitle]= useState('')
  const [enterAmount,setEnterAmount]= useState('')
  const [enterDate,setEnterDate]= useState('')
  // const [UserInput , setUserInput]= useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''                             // An Alternative
  // });
  // const titleChangeHandler= (event)=>{
  //     //  setEnterTitle(event.target.value);
  //     setUserInput({
  //       ...UserInput,
  //       enteredTitle:event.target.value
  //     }); 
  // }
  // const AmountChangeHandler= (event)=>{
  //      setUserInput({
  //       ...UserInput,
  //       enteredAmount:event.target.value
  //      });
  // }
  // const DateChangeHandler= (event)=>{
  //      setUserInput({
  //       ...UserInput,
  //       enteredDate:event.target.value
  //      });
          // setUserInput((prevState)=>{
          // return {...prevState,enterTitle:event.target.value}; *better Way of Doing
          // })
  // }
  const titleChangeHandler= (event)=>{
    setEnterTitle(event.target.value);
   }
  const AmountChangeHandler= (event)=>{
         setEnterAmount(event.target.value);
    }
    const DateChangeHandler= (event)=>{
      setEnterDate(event.target.value);
     }
     const submitHandler=(event)=>{
      event.preventDefault();
       const expenseData={
        title:enterTitle,
        amount:+enterAmount,
        date:new Date(enterDate),
      }
      // console.log(expenseData);
      props.onSaveExpenseData(expenseData);
      setEnterTitle('');
      setEnterAmount('');
      setEnterDate('');
     };
   return (<form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enterTitle} onChange={titleChangeHandler}></input>
            </div>
          </div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={AmountChangeHandler}></input>
            </div>
          </div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-10-1" max="2025-1-31" value={enterDate} onChange={DateChangeHandler}></input>
            </div>
            <div className="new-expense__actions">
           
                <button type="submit">Add Expense</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
          </div>
          </form>)

};

export default ExpenseForm;