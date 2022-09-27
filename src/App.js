import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUserslist] = useState([]);

  const addUserhandler = (uName, uAge) => {
    setUserslist((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserhandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
