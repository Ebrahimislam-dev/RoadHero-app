import React from 'react';
import Rating from 'react-rating';

import './Hero.css'
const Heros = (props) => {
    // console.log(props);
    const { name, Country, experience, rating, img, price } = props.hero;
    return (
        <div >
            <div>
                <div className="card shadow-lg hero-card">
                    <div className="herocard-img">
                        <img src={img} className="card-img-top " alt="" />
                    </div>
                    <div className="mt-3 text-start hero-details">
                        <h6>Name: {name} </h6>
                        <h6>Country: {Country}</h6>
                        <h6>Work Experience: {experience}</h6>
                        <p><Rating
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star text-info"
                            readonly
                        /> {rating}/5 </p>
                        
                        <h6 >Price: ${price}</h6>
                        <br />
                        <button onClick={() =>props.handleAddToCart(props.hero)} className="btn btn-info text-white fw-bold  center fs-5">Hire Me <i className="fas fa-handshake fs-3"></i></button>
                    </div>
                    <div className="card-body d-flex justify-content-around fs-2 ">
                        <a href="/facebook"><i className="text-dark fab fa-facebook-square"></i></a>
                        <a href="/linkdIn"><i className="text-dark fab fa-linkedin"></i></a>
                        <a href="/whatsApp"><i className="text-dark fab fa-whatsapp-square"></i></a>
                        <a href="/twiter"><i className="text-dark fab fa-twitter-square"></i></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Heros;