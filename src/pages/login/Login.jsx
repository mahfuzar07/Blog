import './login.css';
import { Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Login Your Account</h1>
        <form onSubmit={handleSubmit} className="loginForm">
          <input ref={userRef} type="text" placeholder="User Name" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button disabled={isFetching} type="submit">
            Login
          </button>
        </form>
        <li className="link">
          <i class="Icon fas fa-key"></i>Forgot Password
          <i class="Icon fas fa-user"></i>
          <Link className="rlink" to="/register">
            Create An Account
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Login;
