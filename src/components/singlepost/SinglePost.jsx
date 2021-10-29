import { useLocation } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import './singlepost.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setpost] = useState({});
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMood, setUpdateMood] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/post/' + path);
      setpost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/post/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMood(false);
    } catch (err) {}
  };

  const PF = 'http://localhost:5050/images/';
  return (
    <div className="singlepost">
      <div className="singlepostWrapper">
        {post.photo && (
          <img className="singlepostImg" src={PF + post.photo} alt="" />
        )}
        {updateMood ? (
          <input
            className="singlepostTitleInput"
            type="text"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlepostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlepostEdit">
                <i
                  class="singlepostIcon far fa-edit"
                  onClick={() => setUpdateMood(true)}
                ></i>
                <i
                  class="singlepostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlepostInfo">
          <span className="singlepostAuthor">
            <Link className="rlink" to={`/?user=${post.username}`}>
              Author: <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlepostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMood ? (
          <textarea
            className="singlepostDesInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlepostDes">{desc}</p>
        )}
        {updateMood && (
          <button onClick={handleUpdate} className="singlePostbutton">
            Upadte
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
