import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const EditUser = ({
  titles,
  locations,
  users,
  setUsers,
  show,
  handleShow,
  activeEdit,
}) => {
  const [nameValue, setName] = useState(titles[activeEdit]);
  const [emailValue, setEmail] = useState(users[activeEdit].email);
  const [locationValue, setLocation] = useState(locations[activeEdit]);
  const [error, setError] = useState(false);

  const isValidEmailAddress = () => {
    return !!emailValue.match(/.+@.+/);
  };
  const handleChange = (event, inputField) => {
    switch (inputField) {
      case "name":
        setName(event.target.value);
        break;

      case "email":
        setEmail(event.target.value);
        break;

      case "location":
        setLocation(event.target.value);
        break;

      default:
        break;
    }
  };
  const submitForm = () => {
    if (
      isValidEmailAddress() &&
      nameValue.length >= 3 &&
      locationValue.length >= 3
    ) {
      let newUser = {
        id: { value: users[activeEdit].id.value },
        picture: { medium: users[activeEdit].picture.medium },
        name: nameValue,
        email: emailValue,
        location: locationValue,
      };
      users[activeEdit] = newUser;
      setUsers([...users]);
      handleShow(activeEdit);
    } else {
      setError(!error);
      console.log("error");
    }
  };

  return (
    <Modal show={show}>
      <Modal.Header closeButton onClick={() => handleShow(activeEdit)}>
        <Modal.Title>Edit User: {titles[activeEdit]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input
              type='text'
              className='form-control'
              aria-describedby='emailHelp'
              placeholder={titles[activeEdit]}
              onChange={(e) => {
                handleChange(e, "name");
              }}
            />
            <div className='form-text'>
              {error ? "Name should be at least 3 characters" : null}
            </div>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input
              type='text'
              className='form-control'
              placeholder={users[activeEdit].email}
              onChange={(e) => {
                handleChange(e, "email");
              }}
            />
            <div className='form-text'>
              {error ? "Email format should be example@example" : null}
            </div>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Location</label>
            <input
              type='text'
              className='form-control'
              placeholder={locations[activeEdit]}
              onChange={(e) => {
                handleChange(e, "location");
              }}
            />
            <div className='form-text'>
              {error ? "Location should be at least 3 characters" : null}
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type='button'
          className='btn btn-secondary'
          data-bs-dismiss='modal'
          onClick={() => handleShow(activeEdit)}>
          Close
        </button>
        <button type='button' className='btn btn-primary' onClick={submitForm}>
          Save changes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUser;
