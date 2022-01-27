import React from "react";

const UserItem = ({ users }) => {
  console.log(users);
  return (
    <ul className='list-group'>
      {users.map((user) => {
        <li className='list-group-item' key={user.id}>
          {user.name}
        </li>;
      })}
    </ul>
  );
};

export default UserItem;
