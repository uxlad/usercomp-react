import React, { useState } from 'react';
import './App.css';

import Card from './components/Utilities/Cards/Card';
import AddUser from  './components/Users/AddUsers';
import UserList from './components/Users/UserList';
function App() {
  const [userData, setUserData] = useState([]);
  const getUserData = (username, age) => {
    setUserData(prevState => [...prevState, {username: username, age: age}]);
  }

  return (
    <div className="container">
      <Card>
        <AddUser userDataHandler={getUserData}></AddUser>
      </Card>
      <UserList userData={userData} />
    </div>
  );
}

export default App;
