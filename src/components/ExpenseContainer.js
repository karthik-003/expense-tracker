import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseContainer.css";
import ExpenseFilter from "./ExpenseFilter";
import moment from "moment";
import ExpenseHeader from "./ExpenseHeader";
import Modal from "./Common/Modal";

function ExpenseContainer(props) {

  const dataMaster = props.data;
  const [data, setData] = useState(dataMaster);
  const [filteredData, setFilteredData] = useState([]);
  const [showFilteredData, setShowFilteredData] = React.useState(false);
  const [years, setYears] = useState([]);

  const [totalExpense, setTotalExpense] = useState(0);
  const [selectedYear, setSelectedYear] = useState('');
  const [chartData,setChartData] = useState({});

  const getYears = () => {
    var years = new Set([]);
    data.forEach((d) => {
      var year = moment(d.date).year();
      years.add(year);
    });

    setYears(years);
  };

  const yearChangeHandler = (year) => {
    if (year != "all") {
      setShowFilteredData(true);
      var newData = dataMaster.filter(function (d) {
        return moment(d.date).year() == year;
      });
      setFilteredData((prevData) => {
        //console.log('FilteredData: ',newData);
        var chartData = {};
        newData.map((key)=>{
          //console.log(moment(key.date).format('MMM').toUpperCase());
          var month = moment(key.date).format('MMM').toUpperCase();
          var expense = key.amount;
          chartData[month] = expense;
        });
        //console.log('chart Data: ',chartData);
        setChartData((prevChartData)=>{
          return chartData;
        })
        return newData;
      });
      setSelectedYear(year);

    } else {
      setSelectedYear('all');
      setChartData({});
      setShowFilteredData(false);
      setFilteredData([]);
      setData(props.data);
    }
  };

  const calcTotalExpense = ()=>{
    var expense = 0;
    if(!showFilteredData){
      data.forEach((e)=>{
        expense += parseFloat(e.amount);
      });
    }else{
      filteredData.forEach((e)=>{
        expense += parseFloat(e.amount);
      });

      
    }
    setTotalExpense(expense.toFixed(2));
    //console.log('Total expenses: ',expense.toFixed(2));
  }
  useEffect(() => {
    setData(props.data);
    //setShowFilteredData(false);
  });

  useEffect(() => {
    getYears();
    calcTotalExpense();
    setShowFilteredData(false);
  }, []);

  useEffect(() => {
    setData(props.data);
    setShowFilteredData(false);
    setSelectedYear('all')
  }, [props.data]);


  useEffect(() => {
    getYears();
    calcTotalExpense();
  }, [data, filteredData]);

  useEffect(() => {}, [filteredData]); //

  return (
    <div className="expenseContainer">
      <ExpenseHeader totalExpense={totalExpense} showAddExpense={()=>{props.showAddExpense(true)}} showExpChart={selectedYear!='all'} chartData={chartData}/>

      <div className="container">
        <ExpenseFilter
          onYearChange={yearChangeHandler}
          yearsToDisplay={years}
          currentYear ={selectedYear}
        />
        {data.length == 0 && (
          <div className="alert alert-secondary">No expenses found</div>
        )}
        {!showFilteredData
          ? data.map((e, index) => (
              <ExpenseItem
                key={e.id}
                date={e.date}
                title={e.title}
                amount={e.amount}
                comment={e.comment}
              />
            ))
          : filteredData.map((e, index) => (
              <ExpenseItem
                key={e.id}
                date={e.date}
                title={e.title}
                amount={e.amount}
                comment={e.comment}
              />
            ))}
      </div>
      <Modal />
    </div>
  );
}

export default ExpenseContainer;
