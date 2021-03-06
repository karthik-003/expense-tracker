import "./ExpenseForm.css";
import React, { useState } from "react";
import moment from "moment";

const ExpenseForm = (props) => {
  /**
     * Using Multiple States 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const titleChangeHandler = (event)=>{
        //console.log.log('Title changed', event.target.value);
        setEnteredTitle(event.target.value);
    }
    const dateChangeHandler = (event)=>{
        //console.log.log('Date changed', event.target.value);
        setEnteredDate(event.target.value);
    }
    const amountChangeHandler = (event)=>{
        //console.log.log('Amount changed', event.target.value);
        setEnteredAmount(event.target.value);
    }**/

  /** Using Single State */
  let obj = { date: "", title: "", amount: "", comment: "" };
  const [newExpenseObj, setExpenseObj] = useState(obj);
  

  const titleChangeHandler = (event) => {
    /** React schedules update rather than doing instantly.
     * So there might be a change we are updating the old state rathre than the correct state in the midst of state change schedule.
     * Hence the below approach is not recommended. */

    // setExpenseObj({
    //     ...newExpenseObj, // copy the entire object first. And just change the required value. MMaking sure that other values are impacted.
    //     title: event.target.value
    // });

    /**
     * This approach will ensure that, when ever a react state update runs, we get the correct data in the form of 'prevState' argument to the stateChangeHanlder.
     */
    setExpenseObj((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    // setExpenseObj({
    //     ...newExpenseObj,
    //     date: event.target.value
    // });
    setExpenseObj((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    // setExpenseObj({
    //     ...newExpenseObj,
    //     amount: event.target.value
    // });

    setExpenseObj((prevState) => {
      return { ...prevState, amount: parseFloat(event.target.value) };
    });
  };

  const commmentsChangeHandler = (event) => {
    setExpenseObj((prevState) => {
      return { ...prevState, comment: event.target.value };
    });
  };
  const submiteHandler = (event) => {
    event.preventDefault();
    var dateFormat = newExpenseObj.date;
    ////console.log.log("Date value: ", new Date(moment(dateFormat).toISOString()));
    ////console.log.log(newExpenseObj);
    props.onSaveExpenseData({
      ...newExpenseObj,
      date: new Date(moment(dateFormat).toISOString()),
      title: newExpenseObj.title,
      amount: newExpenseObj.amount,
    });
    newExpenseObj.title = "";
    newExpenseObj.date = "";
    newExpenseObj.amount = "";
  };
  const resetData = () => {
    //console.log.log("Resetting data");
  };

  const getExpenseForm = () => {
    return (
      <form className="newExpenseForm" onSubmit={submiteHandler}>
        <div className="row">
          <div className="formControl col-50">
            <h3>Add Expense</h3>
          </div>
        </div>
        <div className="row">
          <div className="formControl col-50">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={newExpenseObj.title}
            />
          </div>
          <div className="formControl col-50">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2024-12-31"
              onChange={dateChangeHandler}
              value={newExpenseObj.date}
            />
          </div>
        </div>
        <div className="row">
          <div className="formControl col-50">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={newExpenseObj.amount}
            />
          </div>
          <div className="formControl col-50">
            <label>Comments</label>
            <textarea
              rows={2}
              cols={43}
              onChange={commmentsChangeHandler}
              value={newExpenseObj.comment}
            ></textarea>
          </div>
        </div>
        <div className="formFooter">
          
            <button type="button" className="btn btn-secondary" onClick={()=>{props.hideForm()}}>Cancel</button>
            <button type="submit" className="btn ">Add Expense</button>
            
          
          
        </div>
      </form>
    );
  };
  return (<div >
      {getExpenseForm()}
  </div>);
};

export default ExpenseForm;
