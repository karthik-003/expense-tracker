import { useEffect,useState } from "react";
import ExpenseChart from "./ExpenseChart/ExpenseChart";
import "./ExpenseFilter.css"


const  ExpenseFilter = (props)=>{

    const yearChangeHandler = (event)=>{
        const updatedYear = event.target.value;
        //console.log('year changed',event.target.value);
        props.onYearChange(updatedYear)
    }
    const [years,setYears] = useState(props.yearsToDisplay);

    useEffect(()=>{
        setYears(props.yearsToDisplay);
    });
    return (
        <div className="expense-filter">
            <div className="header">
                <p><strong>Filter by Year</strong></p>
                <select onChange={yearChangeHandler}>
                    <option selected value="all" >--Year--</option>
                    {
                        Array.from(years).sort().map(y=>(
                            <option value={y} key={y}>{y}</option>
                        ))
                    }
                    
                </select>
            </div>
            {/* <div className="container">
                <ExpenseChart/>
            </div> */}
        </div>
    )
}

export default ExpenseFilter;