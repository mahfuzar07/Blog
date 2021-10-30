import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

function Settings() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);

  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:5050/images/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axios.post('/upload', data);
        setSuccess(true);
      } catch (err) {}
    }
    try {
      const res = await axios.put('/user/' + user._id, updatedUser);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/user/${user._id}`, {
        data: { userId: user._id },
      });
      window.location.replace('/register');
    } catch (err) {}
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsupdateTitle">Update Your Account</span>
          {success && (
            <span
              style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}
            >
              Profile has been Updated...
            </span>
          )}
          <span className="settingsdeleteTitle" onClick={handleDelete}>
            Delete Your Account
          </span>
        </div>
        <div className="profile">
          <label className="profileItem">
            User Name: <b>{user.username}</b>
          </label>
          <label className="profileItem">
            Email: <b>{user.email}</b>
          </label>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />

            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-plus"></i>
            </label>

            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
            />
          </div>
          <label>User Name</label>
          <input
            type="text"
            autoFocus={true}
            placeholder="User Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            autoFocus={true}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            autoFocus={true}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
