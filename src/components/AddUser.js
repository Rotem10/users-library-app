import React from "react";

const AddUser = () => {
  return (
    <form className='add-form'>
      <label className='form-label fs-5'>Add User</label>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          ID
        </span>
        <input
          type='text'
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
        />
      </div>
      <div className='mb-3'>
        <select className='form-select' aria-label='Default select example'>
          <option defaultValue>Title</option>
          <option value='1'>Mr</option>
          <option value='2'>Mrs</option>
          <option value='3'>Miss</option>
          <option value='4'>Ms</option>
        </select>
      </div>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          First Name
        </span>
        <input
          type='text'
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
        />
      </div>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          Last Name
        </span>
        <input
          type='text'
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
        />
      </div>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          Email
        </span>
        <input
          type='email'
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
        />
      </div>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          Address
        </span>
        <input
          type='text'
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
        />
      </div>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          City
        </span>
        <input
          type='text'
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
        />
      </div>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          Country
        </span>
        <input
          type='text'
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='formFile' className='form-label'>
          User Picture
        </label>
        <input className='form-control' type='file' id='formFile' />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default AddUser;
