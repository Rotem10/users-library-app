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
        let location = `${user.location.country}, ${user.location.city}, ${user.location.street.name} ${user.location.street.number}`;
        return (
          <div className='accordion-item' key={index}>
            <h2 className='accordion-header' id='headingOne'>
              {" "}
              <button
                className={`accordion-button  ${
                  index === activeI ? "show fw-bold" : "collapsed"
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
              className={`accordion-collapse collapse  ${
                index === activeI ? "show" : "collapse"
              }`}
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'>
              <div className='accordion-body'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>ID</th>
                      <th scope='col'>Picture</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='align-baseline'>
                      <th scope='row'>{user.id.value}</th>
                      <td>
                        {" "}
                        <img src={user.picture.medium} alt='user-img' />
                      </td>
                      <td>{user.email}</td>
                      <td>{location}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserItem;
