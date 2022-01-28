import React, { useState, useEffect } from "react";
import axios from "axios";
import UserItem from "./UserItem";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [showItem, setShowItem] = useState(false);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10.")
      .then((resp) => {
        let data = resp.data.results;
        setUsers(() => [...data]);
        setShowItem(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='accordion-container'>
      {showItem && <UserItem users={users} setUsers={setUsers} />}
    </div>
  );
};
export default UsersList;
