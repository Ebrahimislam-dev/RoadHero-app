import React from 'react';
import Herolist from '../herolist/Herolist';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;
    let total = 0;

    for (const hero of cart) {
        total = total + hero.price;
        totalQuantity = totalQuantity + 1;

    }
    

    return (
        <div className="sticky-top my-3">
            <h2 className="bg-info text-white py-2">Hire Summary</h2>
            <h3>Total Hiered: {totalQuantity} People</h3>
            <br />
            <h5>Total Cost Amount: $ {total}</h5>   
            {
                cart.map(listInfo => <Herolist
                listInfo={listInfo}
                ></Herolist>)
            }
        </div>
    );
};

export default Cart;