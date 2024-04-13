import React, { useState } from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from "react-redux"
import { addItem, clearCart } from './redux/slice';

const Cart = () => {
    const [data, setData] = useState("");
    const dispatch = useDispatch();
    const items = useSelector(state => state.counter.items);

    const handleAddClick = () => {
        dispatch(addItem(data))
    }
    return (
        <div className="main-container">
            <div className="cart-container">
                <div className="add-item">
                    <input type="text" className='add-input' onChange={(e) => setData(e.target.value)} />
                    <button type="button" className='add-btn' onClick={handleAddClick}>Add</button>
                </div>
                <div className="cart-items">
                    {
                        items.map(item => (
                            <CartItem key={item.key} data={item} />
                        ))
                    }
                </div>
                <div className="clear">
                    <button type="button" onClick={() => dispatch(clearCart())}>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default Cart