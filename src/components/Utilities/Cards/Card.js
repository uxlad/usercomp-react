import React from 'react';
import classes from './Cards.module.css';

const Card = props => {
    return (
        <div key={props.key} className={`${classes.cards} ${props.className}`}>{props.children}</div>
    );
};

export default Card;