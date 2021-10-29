import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

function Settings() {
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      } catch (err) {}
    }
    try {
      await axios.put(`/user/ ${user._id}`, updatedUser);
    } catch (err) {}
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settinfsupdateTitle">Update Your Account</span>
          <span className="settinfsdeleteTitle">Delete Your Account</span>
        </div>
        <form onSubmit={handleSubmit} className="settingsForm" action="">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img src={user.profilePic} alt="" />
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
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Upadte
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
