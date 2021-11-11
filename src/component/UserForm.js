import React, { useState, useContext } from "react";
import { v4 } from "uuid";

import UserContext from "../context/userContext";
const UserForm = () => {
  const userContext = useContext(UserContext);

  const { AddUser } = userContext;
  const [info, setInfo] = useState({
    name: "",
    email: "",
    age: "",
  });

  const onChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    info.id = v4();
    AddUser(info);
    setInfo({
      name: "",
      email: "",
      age: "",
    });
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          className="form-control"
          value={info.name}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="form-control"
          value={info.email}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter Age"
          name="age"
          className="form-control"
          value={info.age}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

export default UserForm;
