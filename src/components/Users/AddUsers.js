import React, { useState } from 'react';

import c from './AddUsers.module.css';
import Button from '../Utilities/Buttons/Button';
import Error from '../Errors/Error';
const AddUser = props => {
    const [usernameData, setUsernameData] = useState('');
    const [ageData, setAgeData] = useState('');
    const [errorData, seterrorData] = useState({});

    const removeError = () => setTimeout(() => { seterrorData({});}, 3000);

    const submitHandler = event => {
        event.preventDefault();
        if(!usernameData.trim() || !ageData.trim()){
            seterrorData(
                {
                    heading: 'invalid-details',
                    message: 'Please enter a valid detail.' 
                }
            );
            removeError();
            return;
        }else if(ageData <= 0){
            seterrorData(
                {
                    heading: 'invalid-age',
                    message: 'Age must be above 1.' 
                }
            );
            removeError();
            return;
        }else{
            seterrorData({
                heading: 'success',
                message: 'Data saved successfully'
            });

            props.userDataHandler(usernameData, ageData);

            removeError();
            setUsernameData('');
            setAgeData('');
        }
    };

    const userHandler = event => {
        setUsernameData(event.target.value);
    };

    const ageHandler = event => {
        setAgeData(event.target.value);
    };

    return (
        <div>
            {!!errorData.heading && <Error errorData={errorData}/>}
            <form onSubmit={submitHandler}>
                <div className={c['form-group']}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={usernameData} placeholder='Enter Username...' className={c['form-control']} onChange={userHandler} />
                </div>
                <div className={c['form-group']}>
                    <label htmlFor='age'>Age</label>
                    <input id='age' type='number' value={ageData} placeholder='Enter Age...' className={c['form-control']} onChange={ageHandler}/>
                </div>
                <div className={c['form-actions']}>
                    <Button type='submit'>Add User</Button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;