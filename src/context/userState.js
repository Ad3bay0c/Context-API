import React, { useReducer } from "react";
import UserReducer from "./userReducer";
import UserContext from "./userContext";
import { ADD_USER } from "./types";
const UserState = (props) => {
  const initialState = {
    users: [
      {
        id: 1,
        name: "John",
        email: "jdoe@gmail.com",
        age: 23,
      },
      {
        id: 2,
        name: "Jane",
        email: "jane@gmail.com",
        age: 24,
      },
      {
        id: 3,
        name: "Joe",
        email: "joe@gmail.com",
        age: 25,
      },
    ],
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Add a user
  const AddUser = (user) => {
    dispatch({
      type: ADD_USER,
      payload: user,
    });
  };
  return (
    <UserContext.Provider
      value={{
        users: state.users,
        AddUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
