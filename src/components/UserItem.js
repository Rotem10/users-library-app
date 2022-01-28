import React, { useState } from "react";
import EditUser from "./EditUser";

const UserItem = ({ users, setUsers }) => {
  const [activeI, setActiveI] = useState(null);
  const [show, setShow] = useState(false);
  const handleToggle = (index) => {
    index === activeI ? setActiveI(null) : setActiveI(index);
  };
  const handleShow = () => {
    setShow(!show);
  };
  const deleteUser = (index) => {
    let newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div className='accordion'>
      {users.map((user, index) => {
        let title = `${user.name.title}. ${user.name.first} ${user.name.last}`;
        let location = `${user.location.country}, ${user.location.city}, ${user.location.street.name}`;
        return (
          <div className='accordion-item' key={index}>
            <h2 className='accordion-header' id='headingOne'>
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
                      <th scope='col'>Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='align-baseline'>
                      <th scope='row'>{user.id.value}</th>
                      <td>
                        <img src={user.picture.medium} alt='user-img' />
                      </td>
                      <td>{user.email}</td>
                      <td>{location}</td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-outline-secondary'
                          onClick={handleShow}>
                          Edit
                        </button>
                        <EditUser
                          users={users}
                          title={title}
                          location={location}
                          email={user.email}
                          show={show}
                          handleShow={handleShow}
                          index={index}
                        />
                        <button
                          type='button'
                          className='btn btn-outline-secondary'
                          onClick={() => {
                            deleteUser(index);
                          }}>
                          Delete
                        </button>
                      </td>
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
