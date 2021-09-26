import React, { useEffect, useState } from 'react';
import Heros from '../heros/Heros';
import './Contractors.css'
const Contractors = () => {
    const [heros, setHeros] = useState([]);

    useEffect(() => {
        fetch('./herodata.JSON')
            .then(res => res.json())
            .then(data => setHeros(data))
    }, []);

    return (
        <div>
            <div className="Contractors-container p-5">
                <div className="hero-container">

                   {
                       heros.map(hero =><Heros hero={hero} ></Heros> )
                   } 
                </div>
                <div className="cart-container">
                    <h1>the cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Contractors;