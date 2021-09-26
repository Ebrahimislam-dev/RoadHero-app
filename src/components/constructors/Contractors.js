import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Heros from '../heros/Heros';
import './Contractors.css'
const Contractors = () => {
    const [heros, setHeros] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./herodata.JSON')
            .then(res => res.json())
            .then(data => setHeros(data))
    }, []);

    const handleAddToCart = (hero) => {
        const newCart = [...cart, hero];
        setCart(newCart);       
    }

    return (
        <div>
            <div className="Contractors-container p-5">
                <div className="hero-container">

                    {
                        heros.map(hero => <Heros
                            key={hero.key}
                            hero={hero}
                            handleAddToCart={handleAddToCart}
                        >

                        </Heros>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Contractors;