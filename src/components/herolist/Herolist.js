import React from 'react';

const Herolist = (props) => {
    // use distructuring for getting data via props
    const { name, img, price } = props.listInfo
    return (
        <div className="d-flex">
            <div >
                <img className="w-50 rounded-circle" src={img} alt="" />
            </div>
            {/* Show user data list */}
            <div>
                <ul>
                    <li>
                        <span>{name}</span>
                    </li>
                    <li>
                        <span>${price}</span>
                    </li>
                </ul>
                
                <br />
                
            </div>
        </div>
    );
};

export default Herolist;