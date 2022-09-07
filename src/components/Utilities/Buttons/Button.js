import React from 'react';

import c from './Button.module.css';

const Button = props => {
    return (
        <button type={props.type || 'button'} className={`${props.className} ${c.btn} ${c.primary}`} onClick={props.btnClickHandler}>{props.children}</button>
    )
};

export default Button;