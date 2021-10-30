import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import './write.css';

function Write() {
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState([]);
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      categories,
      desc,
      file,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.post('/post/create', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {}
  };

  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/cat');
      setCats(res.data);
    };
    getCats();
  });

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form onSubmit={handleSubmit} action="" className="writeForm">
        <div className="writeformGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeformGroup">
          <select
            value={categories}
            className="catSelect"
            onChange={(e) => setCategories([e.target.value])}
          >
            <option disabled selected>
              Categories
            </option>

            {cats.map((c) => (
              <option>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="writeformGroup">
          <textarea
            type="text"
            placeholder="write your story"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
