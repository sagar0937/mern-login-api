import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { userContext } from "../App";

const Login = () => {
  //use context
  const { state, dispatch } = useContext(userContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //onsubmit click
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.status === 400 || !data) {
      alert("Invalid credentials");
    } else {
      //dispatach function
      dispatch({ type: "USER", payload: true });
      alert("Login successfull");
      history.push("/");
    }
  };

  return (
    <>
      <div className='signup-form'>
        <form onSubmit={onHandleSubmit}>
          <h2>Sign In</h2>

          <hr />

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required='required'
                autoComplete='off'
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
                type='password'
                className='form-control'
                name='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required='required'
                autoComplete='off'
              />
            </div>
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-primary btn-lg'>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
