import React from 'react';
import Rating from 'react-rating';

import './Hero.css'
const Heros = (props) => {
    //    Distructuring datas from props
    const { name, Country, experience, rating, img, price } = props.hero;

    return (
        <div >
            <div>
                {/* Load data Card  */}
                <div className="card shadow-lg hero-card">
                    <div className="">
                        <img src={img} className="card-img-top herocard-img " alt="" />
                    </div>
                    {/* Showing data dynimically */}
                    <div className="mt-3 text-start hero-details">
                        <h6>Name: {name} </h6>
                        <h6>Country: {Country}</h6>
                        <h6>Work Experience: {experience}</h6>
                        {/* Adding React Rating */}
                       <h6> <p>Client Rating: <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star text-info"
                            readonly
                        /> {rating}/5 </p></h6>
                        <h6 >Price: ${price}</h6>
                        <br />
                        {/* Hire me button  */}
                        <button
                            onClick={() => props.handleAddToCart(props.hero)} className="btn btn-info text-white fw-bold  center fs-5">Hire Me <i className="fas fa-handshake fs-3"></i>
                        </button>
                    </div>
                    {/* Social Media Tags */}
                    <div className="card-body d-flex justify-content-around fs-2 Social-icon">
                        <a href="/facebook"><i className="Social-icon text-dark fab fa-facebook-square"></i></a>
                        <a href="/linkdIn"><i className="Social-icon text-dark fab fa-linkedin"></i></a>
                        <a href="/whatsApp"><i className="Social-icon text-dark fab fa-whatsapp-square"></i></a>
                        <a href="/twiter"><i className="Social-icon text-dark fab fa-twitter-square"></i></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Heros;