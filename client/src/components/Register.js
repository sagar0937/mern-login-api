import React from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className='signup-form'>
        <form>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <span className='fa fa-user'></span>
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                name='username'
                placeholder='Username'
                required='required'
                autoComplete='false'
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fa fa-paper-plane'></i>
                </span>
              </div>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='Email Address'
                required='required'
                autoComplete='false'
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <span className='fa fa-user'></span>
                </span>
              </div>
              <input
                type='number'
                className='form-control'
                name='phone'
                placeholder='Phone'
                required='required'
                autoComplete='false'
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <span className='fa fa-user'></span>
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                name='profession'
                placeholder='Profession'
                required='required'
                autoComplete='false'
              />
            </div>
          </div>

          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fa fa-lock'></i>
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                name='password'
                placeholder='Password'
                required='required'
                autoComplete='false'
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fa fa-lock'></i>
                  <i className='fa fa-check'></i>
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                name='confirm_password'
                placeholder='Confirm Password'
                required='required'
                autoComplete='false'
              />
            </div>
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-primary btn-lg'>
              Sign Up
            </button>
          </div>
        </form>
        <div className='text-center'>
          Already have an account? <NavLink to='/'>Login here</NavLink>
        </div>
      </div>
    </>
  );
};

export default Register;
