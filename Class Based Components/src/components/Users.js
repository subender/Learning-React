import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class Users extends Component {
  // we use method outside the render function and use here inside the class. there is also other way of defining the methods but this one is standard way.

  // 2. when we need to use the states in our class based components we can't use hook here so in order to achive the state we need to define a constructor and then that constructor will be automatically called when class is instanciated.

  constructor() {
    super();
    //3.. our state in this case is alway be a object and we have to use the term 'state' we cannot change it according to us like we use to do it in function components.
    //4. all the states we want is to grouped inside one object.
    this.state = {
      showUser: true,
      moreState: "test",
    };
  }
  toggleUsersHandler() {
    // 5.. In orde to change the state we call a special method which is porvided by our Component and the method is ==> this.setState();
    //6.. This funciton takes a object and merge it with existing state. (use to overwrite in function based components.)

    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

// const usersList = (
//   <ul>
//     {DUMMY_USERS.map((user) => (
//       <User key={user.id} name={user.name} />
//     ))}
//   </ul>
// );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
