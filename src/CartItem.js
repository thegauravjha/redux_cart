import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { increment, decrement } from "./redux/slice"
import { useDispatch } from 'react-redux';

const CartItem = ({ data }) => {
    const dispatch = useDispatch();

    const handleMinusClick = () => {
        dispatch(decrement(data));
    }

    const handlePlusClick = () => {
        dispatch(increment(data));
    }
    return (
        <div className='cart-item'>
            <div className="item-name">
                <FontAwesomeIcon className='image' icon={faImage} />
                <span className='name'>{data.name}</span>
            </div>
            <div className="item-count">
                <div className='count-btn' onClick={handleMinusClick}><FontAwesomeIcon icon={faMinus} /></div>
                <span className='count'>{data.quantity}</span>
                <div className='count-btn' onClick={handlePlusClick}><FontAwesomeIcon icon={faPlus} /></div>
            </div>
        </div>
    )
}

export default CartItem