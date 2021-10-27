import React, { useState } from 'react';
import './register.css';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

function Register() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="registercontainer">
      <div className="registerwrapper">
        <h1 className="registertitle">Create An Account</h1>
        <form className="registerForm">
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <span className="registerAm">
            <Checkbox checked={checked} onChange={handleChange} />
            By creating an account, I consent to the processing of my persional
            data in <b>PRIVACY POLICY</b>.
          </span>
          <button className="registerbutton">Create Account</button>
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
