const Login = () => {
  return (
    <>
      <div className='signup-form'>
        <form>
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
