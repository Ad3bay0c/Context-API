import React, { useContext } from "react";
import UserForm from "./UserForm";
import UserItem from "./UserItem";

import UserContext from "../context/userContext";
const Home = ({ AddUser, DeleteUser }) => {
  const userContext = useContext(UserContext);
  const { users } = userContext;
  return (
    <div className="grid-2">
      <div>
        {/* User Form */}
        <p>User Form</p>
        <UserForm />
      </div>
      <div>
        <h4>List of Users</h4>
        {users.map((user) => (
          <UserItem user={user} DeleteUser={DeleteUser} />
        ))}
      </div>
    </div>
  );
};

export default Home;
