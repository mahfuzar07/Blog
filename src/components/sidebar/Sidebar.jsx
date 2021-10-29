import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/cat');
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          className="sidebarImg"
          src="https://media.istockphoto.com/photos/spring-beautiful-background-with-green-juicy-young-foliage-and-empty-picture-id1301592032?b=1&k=20&m=1301592032&s=170667a&w=0&h=TwSiOgSX3Kc8hRKREuPAg3SQfhLngTMQqAI-xldjuvg="
          alt=""
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarlist">
          {cats.map((c) => (
            <Link className="rlink" to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-github-square"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
