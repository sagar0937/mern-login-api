import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Register.css";

const Register = () => {
  let name, value;
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  //onchange function for all input
  const handleChange = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  //form submit function
  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });
    const data = await response.json();
    console.log("register", data);
    if (data.status === 422 || !data) {
      alert("error");
    } else {
      alert("successfully Register User !!");
      history.push("/login");
    }
  };
  return (
    <>
      <div className='signup-form'>
        <form onSubmit={handleRegister}>
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
                name='name'
                placeholder='Username'
                required='required'
                autoComplete='off'
                value={user.name}
                onChange={handleChange}
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
                value={user.email}
                onChange={handleChange}
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
                value={user.phone}
                onChange={handleChange}
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
                name='work'
                placeholder='Profession'
                required='required'
                autoComplete='false'
                value={user.work}
                onChange={handleChange}
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
                value={user.password}
                onChange={handleChange}
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
                name='cpassword'
                placeholder='Confirm Password'
                required='required'
                autoComplete='false'
                value={user.cpassword}
                onChange={handleChange}
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
