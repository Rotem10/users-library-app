import React, { useState } from "react";

const UserItem = ({ users }) => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  console.log(users);
  return (
    <div className='accordion'>
      {users.map((user) => {
        let title = `${user.name.title}. ${user.name.first} ${user.name.last}`;
        return (
          <div className='accordion-item' key={user.name.last}>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className={`accordion-button  ${
                  isActive ? "collapsed" : "show"
                }`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
                onClick={handleToggle}>
                {title}
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse collapse'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'>
              <div className='accordion-body'></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserItem;
