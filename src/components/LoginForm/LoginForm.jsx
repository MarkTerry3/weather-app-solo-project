import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    // history.push fixes bug where if you log out while on Account page, then log in as a new user, it brings you right to the account page again.
      history.push('/home');
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }

  }; // end login



  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            autocomplete="off"
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
            required
            value={password}
            autocomplete="off"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        
        <input className="btn" type="submit" name="submit" value="Log In"/>
      </div>
    </form>
  );
}

export default LoginForm;
