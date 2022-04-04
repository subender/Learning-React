import classes from "./User.module.css";
import { Component } from "react"; // this will provide some very important properties like props and we could use those props by using 'this.props'

class User extends Component {
  render() {
    // This render function is responsible for rendering any component.

    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
