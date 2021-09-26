import React from 'react';
import './Hero.css'
const Heros = (props) => {
    console.log(props);
    const { name, Country, experience, rating, img, price } = props.hero;
    return (
        <div >
            <div>
                <div className="card shadow-lg hero-card">
                    <div className="herocard-img">
                        <img src={img} className="card-img-top " alt="" />
                    </div>
                    <div className="mt-3 text-start hero-details">
                       <h6>Name:<span>{name}</span> </h6>
                        <p >Country: {Country}</p>
                        <p >Work Experience: {experience}</p>
                        <p >{rating}</p>
                        <p >Price: ${price}</p>
                    </div>
                    <div className="card-body">
                        <a href="/facebook" className="card-link">Card link</a>
                        <a href="/linkdIn" className="card-link">Another link</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Heros;