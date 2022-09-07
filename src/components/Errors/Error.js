import React from 'react';

// import Card from '../Utilities/Cards/Card';
import c from './Error.module.css';

const Error = props => {
    return (
        <div className={`${c.box} ${!!props.errorData.heading ? c.error : ''} ${props.errorData.heading === 'success'? c.success : ''}`}>
            {props.errorData.message}
        </div>
    );
}

export default Error;