import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseContainer.css";
import ExpenseFilter from "./ExpenseFilter";
import moment from "moment";

function ExpenseContainer(props) {

  const dataMaster = props.data;
  const [data, setData] = useState(dataMaster);
  const [filteredData, setFilteredData] = useState([]);
  const [showFilteredData, setShowFilteredData] = React.useState(false);
  const [years, setYears] = useState([]);

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
      ////console.log("Year changed to: ", year);
      var newData = dataMaster.filter(function (d) {
        return moment(d.date).year() == year;
      });
      ////console.log('Filtered data: ',newData);
      setFilteredData((prevData) => {
          ////console.log('Previouse filtered data: ',prevData);
        return newData;
      });
    } else {
        setShowFilteredData(false);
        setFilteredData([]);
        setData(props.data);
    }
  };


  useEffect(() => {
    setData(props.data);
    //setShowFilteredData(false);
  });

  useEffect(() => {
    getYears();
    setShowFilteredData(false);
  }, []);

  useEffect(()=>{
    setData(props.data);
      //console.log('props.data changed...');
      setShowFilteredData(false);
  },[props.data]);

  useEffect(() => {
    getYears();
  }, [data,filteredData]);

  useEffect(() => {
    //console.log("filteredData changed..", filteredData, ' show filtered data: ',showFilteredData);
    //console.log('Original data: ',data);
  }, [filteredData]); //

  return (
    <div className="expenseContainer">
      <h2>Expense Summary</h2>

      <div className="container">
        <ExpenseFilter
          onYearChange={yearChangeHandler}
          yearsToDisplay={years}
        />
        {!showFilteredData &&
          data.map((e, index) => (
            ////console.log(e);
            <ExpenseItem
              key={e.id}
              date={e.date}
              title={e.title}
              amount={e.amount}
            />
          ))}
        {showFilteredData &&
          filteredData.map((e, index) => (
            <ExpenseItem
              key={e.id}
              date={e.date}
              title={e.title}
              amount={e.amount}
            />
          ))}
      </div>
    </div>
  );
}

export default ExpenseContainer;
