import BarFill from './BarFill';
import './ExpenseChart.css';

export default (props)=>{
    return (
        <div className='bar'>
            {props.amount != 0 ? (<span>${props.amount}</span>) : <span>-</span>}
            <BarFill value={props.amount}/>
            <div className='barTitle'>
                    {props.title}
            </div>
        </div>
    )
}