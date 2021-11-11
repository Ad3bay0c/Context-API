import React from "react";
import { ADD_USER } from "./types";

const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    default:
      return state;
  }
};

export default userReducer;
