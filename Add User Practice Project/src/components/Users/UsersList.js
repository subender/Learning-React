import React from "react";
import { List } from "./UsersList.styled";
import { Card } from "../UI/Card.styled";

const UsersList = (props) => {
  return (
    <Card>
      <List>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old.)
          </li>
        ))}
      </List>
    </Card>
  );
};

export default UsersList;
