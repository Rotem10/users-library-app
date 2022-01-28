import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const EditUser = ({
  users,
  title,
  location,
  email,
  show,
  handleShow,
  index,
}) => {
  let nameId = `name ${index}`;
  let emailId = `email ${index}`;
  let locationId = `location ${index}`;

  return (
    <Modal show={show}>
      <Modal.Header closeButton onClick={handleShow}>
        <Modal.Title>Edit User: {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className='mb-3'>
            <label htmlFor={nameId} className='form-label'>
              Name
            </label>
            <input
              type='email'
              className='form-control'
              id={nameId}
              aria-describedby='emailHelp'
              placeholder={title}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor={emailId} className='form-label'>
              Email
            </label>
            <input
              type='password'
              className='form-control'
              id={emailId}
              placeholder={email}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor={locationId} className='form-label'>
              Location
            </label>
            <input
              type='password'
              className='form-control'
              id={locationId}
              placeholder={location}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type='button'
          className='btn btn-secondary'
          data-bs-dismiss='modal'
          onClick={handleShow}>
          Close
        </button>
        <button type='button' className='btn btn-primary'>
          Save changes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUser;
