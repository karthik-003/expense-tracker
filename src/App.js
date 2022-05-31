import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import moment from 'moment';
import ExpenseContainer from './components/ExpenseContainer';
import NewExpense from './components/AddExpense/AddExpense';
import React,{ useState }  from 'react';
function App() {

  const expensesMaster = [
    {date: new Date(2021,9,21),title:'Electricity Bill',amount: 12.35},
    {date: new Date(2021,10,22),title:'Insurance Premium',amount: 300.47},
    {date: new Date(2020,9,1),title:'House Tax',amount: 100.35}
  ];
  const [expenses,setExpenses] = useState(expensesMaster);

  const addExpenseHandler = (newExpense)=>{
    console.log('In App.js',newExpense);
    setExpenses((prevExpenses) => {
      var updatedExpenses = [newExpense,...prevExpenses];
      return updatedExpenses;
    });
  }
  //moment(expenses[0].date.toDateString()).format('DD-MMM-YYYY')
  return (
  <div >
    <NewExpense onAddExpense={addExpenseHandler}/>
    <ExpenseContainer data={expenses}></ExpenseContainer>
    
  </div>
  )
  
}
function formatDate(date){
  let dateObj = date.to
}
export default App;
