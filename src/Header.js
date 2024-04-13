import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <div className="title">Wishlist</div>
            <div className="total-cart">
                <FontAwesomeIcon className='total-cart-icon' icon={faCartShopping} />
                <span className='total-cart-item'>4</span>
            </div>
        </div>
    )
}

export default Header