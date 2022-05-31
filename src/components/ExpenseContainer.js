import React,{ useState,useEffect } from 'react';
import ExpenseItem from "./ExpenseItem"
import './ExpenseContainer.css';
import ExpenseFilter from "./ExpenseFilter";
import moment from 'moment';

function ExpenseContainer(props){
    

    
    const dataMaster = props.data;
    const [data,setData] = useState(dataMaster);
    const [filteredData,setFilteredData] = useState([]);
    const [showFilteredData,setShowFilteredData] = React.useState(false);
    const [years,setYears] = useState([]);

    const getYears = ()=>{
        console.log('Get years called. ')
        var years = new Set([]);
        data.forEach(d=>{
            var year = moment(d.date).year();
            years.add(year);
        });
        setYears(years);
        console.log('Final years: ',years);
        console.log('Final years: ',Object.keys(years));

    }

    const yearChangeHandler=(year)=>{
        if(year!="all"){
            setShowFilteredData(true);
            console.log('Year changed to: ',year);
            var newData = dataMaster.filter(function (d){
                return moment(d.date).year() == year;
            });
            console.log(newData);
            setFilteredData((prevData)=>{
                return newData;
            });
            
        }else{
            setShowFilteredData(false);
            setFilteredData(props.data);
        }
       
    }
    useEffect(() => {
        setData(props.data);
        //setShowFilteredData(false);
    }); 
    useEffect(()=>{
        getYears();
        setShowFilteredData(false);
    },[]);
    useEffect(()=>{
        getYears();
    },[data]);

    // useEffect(() => {
    //     setData(props.data);
        
    // },[props.data]); 

      useEffect(() => {
        // code to run after render goes here
        //setData(props.data);
        setData(filteredData);
        console.log('filteredData changed..',filteredData);
      },[filteredData]); // 
    
    return (
        <div className="expenseContainer">
            <h2>Expense Tracker</h2>

            <div className="container">
                    <ExpenseFilter onYearChange={yearChangeHandler} yearsToDisplay={years}/>
                    {   !showFilteredData && 
                        data.map((e,index)=>{
                            //console.log(e);
                            return React.createElement(ExpenseItem, {date: e.date,title:e.title,amount:e.amount});
                            
                        })
                    }{   showFilteredData && 
                        filteredData.map((e,index)=>{
                            //console.log(e);
                            return React.createElement(ExpenseItem, {date: e.date,title:e.title,amount:e.amount});
                            
                        })
                    }
            
            
            </div>
            
        </div>
    )
}

export default ExpenseContainer