import './singlepost.css';

function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlepostWrapper">
        <img
          className="singlepostImg"
          src="http://4.bp.blogspot.com/-PD8v9eb709I/VBrhYMtqxUI/AAAAAAAAAEw/LOsxep3uuSE/s1600/Tea%2BGarden.jpg"
          alt=""
        />
        <h1 className="singlepostTitle">
          Lorem ipsum dolor sit amet consecteturelit
          <div className="singlepostEdit">
            <i class="singlepostIcon far fa-edit"></i>
            <i class="singlepostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlepostInfo">
          <span className="singlepostAuthor">
            Author: <b>Mahfuzar Rahman</b>
          </span>
          <span className="singlepostDate"> 1 hour ago</span>
        </div>
        <p className="singlepostDes">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim
          velit ducimus laboriosam ut! Soluta, quia officia inventore animi
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
