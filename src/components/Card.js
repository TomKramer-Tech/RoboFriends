import React from 'react';
import './Card.css'

const Card = ({ name, email, id }) => {
    return(
        <div className='card tc dib br3 pa 3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/bartholomew${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;