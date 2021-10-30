import React from 'react';
import './post.css';
import { Link } from 'react-router-dom';

function Post({ post }) {
  const PF = 'http://localhost:5050/images/';
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          <Link className="rlink" to={`/?cat=${post.categories}`}>
            <span className="postCat">{post.categories}</span>
          </Link>
        </div>
        <span className="postTitle">
          <Link className="rlink" to={`./post/${post._id}`}>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDes">{post.desc}</p>
    </div>
  );
}

export default Post;
