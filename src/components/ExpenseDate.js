import moment from 'moment';
import './ExpenseDate.css';

function ExpenseDate(props){
    let unFormattedDate = moment(props.date).format('DD-MMMM-YYYY')
    let date = unFormattedDate.split('-')[0];
    let month = unFormattedDate.split('-')[1];
    let year = unFormattedDate.split('-')[2];
    return (
        <div>
            <div className="date">
                <div>{month}</div>
                <div>{date}</div>
                <div>{year}</div>
            </div>
        </div>
    )
}

export default ExpenseDate