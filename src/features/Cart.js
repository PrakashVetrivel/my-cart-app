// src/features/cart/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './cartSlice';
import './Cart.css';

const Cart = () => {
    const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <h2>Cart</h2>
            {items.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="item-details">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="item-quantity">
                            <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                        </div>
                        <div className="item-price">${item.totalPrice.toFixed(2)}</div>
                        <button onClick={() => dispatch(removeItem(item))}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="cart-summary">
                <p>Total Quantity: {totalQuantity}</p>
                <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;
