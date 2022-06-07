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
    const [currentYear,setCurrentyear] = useState(props.currentYear);
    useEffect(()=>{
        setYears(props.yearsToDisplay);
        setCurrentyear(props.currentYear);
    });

    return (
        <div className="expense-filter">
            <div className="header">
                <p><strong>Filter by Year</strong></p>
                <select onChange={yearChangeHandler}>
                    <option selected={currentYear == 'all'} value="all" >--Year--</option>
                    {
                        Array.from(years).sort().map(y=>(
                            <option selected={y == currentYear} value={y} key={y}>{y}</option>
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