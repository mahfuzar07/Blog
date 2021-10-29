import React, { useState } from 'react';
import './register.css';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="registercontainer">
      <div className="registerwrapper">
        <h1 className="registertitle">Create An Account</h1>
        {error && <h4 className="error">Ops!!! Something went wrong!</h4>}
        <form className="registerForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <span className="registerAm">
            <Checkbox checked={checked} onChange={handleChange} />
            By creating an account, I consent to the processing of my persional
            data in <b>PRIVACY POLICY</b>.
          </span>
          <button type="submit" className="registerbutton">
            Create Account
          </button>
        </form>

        <li className="registerlink">
          <i class="Icon fas fa-user"></i>
          <Link className="rlink" to="/login">
            Already have a Account
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Register;
