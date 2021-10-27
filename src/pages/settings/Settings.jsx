import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settinfsupdateTitle">Update Your Account</span>
          <span className="settinfsdeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm" action="">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://media.istockphoto.com/photos/spring-beautiful-background-with-green-juicy-young-foliage-and-empty-picture-id1301592032?b=1&k=20&m=1301592032&s=170667a&w=0&h=TwSiOgSX3Kc8hRKREuPAg3SQfhLngTMQqAI-xldjuvg="
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>User Name</label>
          <input type="text" placeholder="write username" />
          <label>Email</label>
          <input type="email" placeholder=" example@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="password" />
          <button className="settingsSubmit">Upadte</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
