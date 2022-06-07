import './ExpenseChart.css';

export default (props)=>{
    var value = props.value;
    if(value == 0) value = 1;
    return (
        <div className='barValueHolder'>
            <div className='barEmpty' style={{height: 100-value}}>
                
            </div>
            <div className='barValue' style={{height: value}}>
                
            </div>
        </div>
    )
}