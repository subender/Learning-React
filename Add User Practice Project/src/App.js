import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userData, setUserData] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUserData((prevData) => {
      return [
        ...prevData,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userData} />
    </div>
  );
}

export default App;
