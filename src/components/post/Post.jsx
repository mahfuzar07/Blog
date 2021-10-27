import React from 'react';
import './post.css';
import { Link } from 'react-router-dom';

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://media-cdn.tripadvisor.com/media/photo-s/0a/a8/97/41/lalakhal-nature-park.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Music</span>
          <span className="postCat">Music</span>
        </div>
        <span className="postTitle">
          <Link className="rlink" to="./post/:postId">
            Lorem ipsum dolor sit
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hours ago</span>
      </div>
      <p className="postDes">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero.
        dolor nostrum quae impedit quibusdam expedita id debitis repellat.
        dolorem repudiandae quia iste sapiente non beatae ipsam magnam! Fugit.
        facere ut alias laborum dolorum nihil corporis quo enim dolorem atque!
      </p>
    </div>
  );
}

export default Post;
