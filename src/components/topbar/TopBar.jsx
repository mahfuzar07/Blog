import { Link } from 'react-router-dom';

import './topbar.css';

function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-github-square"></i>
        <i className="topIcon fab fa-linkedin"></i>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="rlink" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="rlink" to="/settings">
              Profile
            </Link>
          </li>

          <li className="topListItem">
            <Link className="rlink" to="/write">
              Write
            </Link>
          </li>
        </ul>
      </div>
      <div className="topright">
        <li className="topListItem">{user && 'Logout'}</li>
        {user ? (
          <img
            className="topImage"
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            alt=""
          ></img>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="rlink" to="/login">
                login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="rlink" to="/register">
                register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
