import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

import './topbar.css';

function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:5050/images/';

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
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

          {user ? (
            <li className="topListItem">
              <Link className="rlink" to="/write">
                Write
              </Link>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
      <div className="topright">
        <li onClick={handleLogout} className="topListItem">
          {user && 'Logout'}
        </li>

        {user ? (
          <Link className="rlink" to="/settings">
            <img className="topImage" src={PF + user.profilePic} alt=""></img>
          </Link>
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
