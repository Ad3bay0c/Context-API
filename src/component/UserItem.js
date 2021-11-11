import React from "react";

const UserItem = ({ user: { id, name, email, age }, DeleteUser }) => {
  const OnDelete = () => {
    DeleteUser(id);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="badge badge-success" style={{ float: "right" }}>
            {age}
          </div>
          <h2>{name}</h2>
          <p>{email}</p>
          <button className="btn btn-sm btn-danger" onClick={OnDelete}>Delete</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default UserItem;
