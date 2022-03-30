import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [zipCode, setZipCode] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  // const user = useSelector(store => store.user);
  const user = useSelector(store => store.user);

  const registerUser = (event) => {
    event.preventDefault();

    // grabbing user data, and setting a reducer with this data
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        zipCode: zipCode,
      },
    });
    whoIsUser();
  }; // end registerUser


  const whoIsUser = () => {
    console.log('user registrationForm', user);
    console.log('Hyello');
  }


  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            autocomplete="off"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            autocomplete="off"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div> 
      <div>
        <label htmlFor="password">
          Zip code:
          <input
            type="text"
            name="zipCode"
            value={zipCode}
            autocomplete="off"
            required
            onChange={(event) => setZipCode(event.target.value)}
          />
        </label>
      </div> 
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
