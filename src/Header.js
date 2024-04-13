import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Header = () => {
    const total = useSelector(state => state.counter.total);
    return (
        <div className="header">
            <div className="title">Wishlist</div>
            <div className="total-cart">
                <FontAwesomeIcon className='total-cart-icon' icon={faCartShopping} />
                <span className='total-cart-item'>{total}</span>
            </div>
        </div>
    )
}

export default Header