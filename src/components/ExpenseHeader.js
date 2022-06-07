
import { useEffect, useState } from "react";
import ExpenseChart from "./ExpenseChart/ExpenseChart";
import "./ExpenseHeader.css";


export default (props)=>{
    
    const [totalExpenses,setTotalExpenses] = useState(0);
    const [showExpChart, setShowExpChart] = useState();
    const [chartData, setChartData] = useState();
    

    useEffect(()=>{
        setTotalExpenses(props.totalExpense);
        setShowExpChart(props.showExpChart);
        setChartData(props.chartData);
    });
    return (
        <div className="expenseHeader">
            <div className="expenseTitle">
                <h2>Expense Detail</h2>
                <button className="btn" onClick={()=>{ props.showAddExpense(true)}}>Add New Expense</button>
            </div>
            
            <div className="expenseRow"><span className="label"> Total Expenses: </span> <span>$ {totalExpenses}</span></div>
            {showExpChart && <ExpenseChart chartData = {chartData}/>}
        </div>
    )
}