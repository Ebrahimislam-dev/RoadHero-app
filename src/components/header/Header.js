import React from 'react';
import './Header.css'
const Header = () => {
    return (

        <div>
            <nav>
                <a href="/shop">Hero's</a>
                <a href="/orders">Contract With Hero</a>
                <a href="/inventory">Hire</a>
            </nav>
            <div className="bg-dark text-info text-center pb-3">
                <h1>Make a Road Constructor's Team </h1>
                <h3>Welcome To Our Road Hero's</h3>
                <h3>Total Budget : 200 Million</h3>
            </div>

        </div>
    );
};

export default Header;