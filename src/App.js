import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import moment from 'moment';
import ExpenseContainer from './components/ExpenseContainer';
import NewExpense from './components/AddExpense/AddExpense';
import React,{ useState }  from 'react';
function App() {

  const expensesMaster = [
    // {id:'1',date: new Date(2021,9,21),title:'Electricity Bill',amount: 12.35,comment:'Electricity bill for October month'},
    // {id:'2',date: new Date(2021,10,22),title:'Insurance Premium',amount: 300.47,comment:'Yearly Insurance Premium'},
    // {id:'3',date: new Date(2020,9,1),title:'House Tax',amount: 100.35,comment:'House Tax for year 2020.'}
  ];
  const [expenses,setExpenses] = useState(expensesMaster);
  const [showNewExpense, setShowNewExpense] = useState(false);
  const addExpenseHandler = (newExpense)=>{
    //console.log('In App.js',newExpense);
    setExpenses((prevExpenses) => {
      var updatedExpenses = [newExpense,...prevExpenses];
      setShowNewExpense(false);
      return updatedExpenses;
    });
  }
  return (
  <div >
    {showNewExpense && <NewExpense onAddExpense={addExpenseHandler} hideForm={()=>{setShowNewExpense(false)}}/>}
    <ExpenseContainer data={expenses} showAddExpense={()=>{setShowNewExpense(true)}}></ExpenseContainer>
    
  </div>
  )
  
}
function formatDate(date){
  let dateObj = date.to
}
export default App;
