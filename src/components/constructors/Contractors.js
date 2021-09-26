import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Heros from '../heros/Heros';
import './Contractors.css'
const Contractors = () => {
    // Load fake data from my hero data JSON file
    const [heros, setHeros] = useState([]);
    // using for cart state
    const [cart, setCart] = useState([]);
    // load fake data via state
    useEffect(() => {
        fetch('./herodata.JSON')
            .then(res => res.json())
            .then(data => setHeros(data))
    }, []);
    // for button handeler function
    const handleAddToCart = (hero) => {
        const newCart = [...cart, hero];
        setCart(newCart);       
    }

    return (
        <div>
            <div className="Contractors-container p-5">
                {/* Display load data section */}
                <div className="hero-container">
                    {/* Using component for displaying data in Ui */}
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
                     {/*Using component for Display Cart  */}
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Contractors;