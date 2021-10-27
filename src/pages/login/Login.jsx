import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Login Your Account</h1>
        <form className="loginForm">
          <input type="text" placeholder="User Name" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
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
