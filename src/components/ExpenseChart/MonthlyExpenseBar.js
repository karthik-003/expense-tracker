import "./MonthlyExpenseBar.css";

function MonthlyExpenseBar(props){
    return(
        <div className="month">
            <div className="monthlyBarContainer">
                <div className="monthlyBarValRem"> </div>
                <div className="monthlyBarVal"> </div>
            </div>
            <div className="title">{props.label}</div>
        </div>
    )
}
export default MonthlyExpenseBar;