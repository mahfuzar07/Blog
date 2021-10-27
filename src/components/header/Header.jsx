import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesm"> React & Node</span>
        <span className="headerTitlelg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://media.istockphoto.com/photos/spring-beautiful-background-with-green-juicy-young-foliage-and-empty-picture-id1301592032?b=1&k=20&m=1301592032&s=170667a&w=0&h=TwSiOgSX3Kc8hRKREuPAg3SQfhLngTMQqAI-xldjuvg="
        alt=""
      />
    </div>
  );
}

export default Header;
