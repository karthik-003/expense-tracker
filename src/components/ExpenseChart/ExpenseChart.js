import "./ExpenseChart.css"
import MonthlyExpenseBar from "./MonthlyExpenseBar";
import React from "react";
const months = ['JAN','FEB','MARCH','APR']
const months_ = [{
    title: 'JAN',
    expense: 20
},{
    title: 'FEB',
    expense: 15
},{
    title: 'MAR',
    expense: 20
},{
    title: 'APR',
    expense: 20
}]
function ExpenseChart(){
    return (
        
            <div className="chart">
                {
                    months_.map((e,index)=>{
                        console.log(e);
                        return React.createElement(MonthlyExpenseBar, {label: e.title,val:e.expense});
                        
                    })
                }
                {/* <MonthlyExpenseBar/>
                <MonthlyExpenseBar/>
                <MonthlyExpenseBar/>
                <MonthlyExpenseBar/> */}
            </div>
            
       
    )
}

export default ExpenseChart;