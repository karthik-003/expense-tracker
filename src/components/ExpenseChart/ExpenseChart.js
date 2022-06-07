
import React, { useEffect, useState } from 'react';
import ChartBar from './ChartBar';
import './ExpenseChart.css';

const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];


export default (props)=>{
    const [expData,setExpData] = useState({});

useEffect(()=>{
    setExpData(props.chartData);
})
    return (
        <div className='chartContainer'>
            {months.map((month,index)=>{
                if( month in expData){
                    return (<ChartBar key={index} title={month} amount={expData[month]}/>)
                }
                else 
                    return(<ChartBar title={month} amount='0'/>)
            })}
        </div>
    )
}