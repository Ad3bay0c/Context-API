import { useState, Fragment } from "react";
import Home from "./component/Home";
import "./App.css";

import UserState from "./context/userState";
const App = () => {
  const [users, setUsers] = useState([]);

  //Delete a user
  const DeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <Fragment>
      <UserState>
        <Home DeleteUser={DeleteUser} />
      </UserState>
    </Fragment>
  );
};

export default App;
