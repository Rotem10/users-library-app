import React, { useState } from "react";

const UserItem = ({ users }) => {
  const [activeI, setActiveI] = useState(null);
  const handleToggle = (index) => {
    index === activeI ? setActiveI(null) : setActiveI(index);
  };
  console.log(users);
  return (
    <div className='accordion'>
      {users.map((user, index) => {
        let title = `${user.name.title}. ${user.name.first} ${user.name.last}`;
        return (
          <div className='accordion-item' key={index}>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className={`accordion-button  ${
                  index === activeI ? "show" : "collapsed"
                }`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
                onClick={() => {
                  handleToggle(index);
                }}>
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
