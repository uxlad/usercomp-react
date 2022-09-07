import React from "react";
import c from './List.module.css';
const List = props => {
    return (
        <li className={`${c.li} ${props.className}`}>{props.children}</li>
    )
};

export default List;