import React from 'react';

// import Card from '../Utilities/Cards/Card';
import c from './UserList.module.css';
import List from '../Utilities/Lists/List';

const UserList = props => {
    let key = 0;
    return (
        <ul className={c.lists}>
            {
                props.userData.map(data => <List key={key++} className={c.single}><strong>{data.username}</strong> is <strong>{data.age}</strong> years of age.</List>)
            }
        </ul>
    );
};

export default UserList;