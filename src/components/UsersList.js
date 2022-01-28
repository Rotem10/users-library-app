import React, { useState, useEffect } from "react";
import axios from "axios";
import UserItem from "./UserItem";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10.")
      .then((resp) => {
        let data = resp.data.results;
        setUsers(() => [...data]);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  }, []);

  return (
    <div className='accordion-container'>
      {users && <UserItem users={users} />}
    </div>
  );
};
export default UsersList;
