import React, { useState } from "react";
import EditUser from "./EditUser";

const UserItem = ({ users, setUsers }) => {
  const [activeIndex, setActiveI] = useState(null);
  const [show, setShow] = useState(false);
  const [activeEdit, setActiveE] = useState(0);
  const handleToggle = (index) => {
    index === activeIndex ? setActiveI(null) : setActiveI(index);
  };
  const handleShow = (index) => {
    setShow(!show);
    setActiveE(index);
  };
  const deleteUser = (index) => {
    let newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };
  let titles = users.map((user) => {
    return user.name.title
      ? `${user.name.title}. ${user.name.first} ${user.name.last}`
      : user.name;
  });
  let locations = users.map((user) => {
    return user.location.country
      ? `${user.location.country}, ${user.location.city}, ${user.location.street.name}`
      : user.location;
  });

  return (
    <div className='accordion'>
      {users.map((user, index) => {
        // let title = user.name.title
        //   ? `${user.name.title}. ${user.name.first} ${user.name.last}`
        //   : user.name;
        // let location = user.location.country
        //   ? `${user.location.country}, ${user.location.city}, ${user.location.street.name}`
        //   : user.location;
        return (
          <div className='accordion-item' key={index}>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className={`accordion-button  ${
                  index === activeIndex ? "show fw-bold" : "collapsed"
                }`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
                onClick={() => {
                  handleToggle(index);
                }}>
                {titles[index]}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse  ${
                index === activeIndex ? "show" : "collapse"
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
                      <td>{locations[index]}</td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-outline-secondary'
                          onClick={() => handleShow(index)}>
                          Edit
                        </button>
                        <EditUser
                          titles={titles}
                          locations={locations}
                          users={users}
                          setUsers={setUsers}
                          activeEdit={activeEdit}
                          // index={index}
                          show={show}
                          handleShow={handleShow}
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
