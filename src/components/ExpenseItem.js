import './ExpenseItem.css'
import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Modal from './Common/Modal';

function ExpenseItem(props){
    /**
     * Only useState can change the variables (data), not plain vairables. 
     * useState() hook return an array with 2 values - 1) Variable that holds the value, 2) a handler which is called when the variable needs to be updated. 
     * This causes React to re-evaluate the entire component. (only ythis component)
     */
    const [title,setTitle] = useState(props.title);
    const [showModal,setShowModal] = useState(false);

    const changeTile = ()=>{
        setTitle(title+' Updated!!!');
    }

    const openEditModal = ()=>{
        setShowModal((prevState)=>{
            return !prevState;
        })
    }

    const onModalClose = ()=>{
        setShowModal((prevState)=>{
            return false;
        })
    }
    //console.log('Props in Expense Item: ',props);
    return (
        
            <div className="expense">
                <ExpenseDate date={props.date}/>
                <div className="title"><p>{props.title}</p></div>
                <div className="amount"><p>$ {props.amount}</p> </div>
                <div className="comments"><p>{props.comment}</p> </div>
                {/* <div className="expenseActions">
                    <i class="bi bi-pencil" data-toggle="tooltip" data-placement="bottom" title="Edit Expense" data-toggle="modal" data-target="#staticBackdrop"></i>
                    <i className="bi bi-x-circle" data-toggle="tooltip" data-placement="bottom" title="Delete Expense"></i>
                </div> */}

                
                    
                
            </div>
        
        
        );
}

export default ExpenseItem