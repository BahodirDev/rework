import React from 'react';

function HomePageLeftPage(props) {
   
    const {postSend,iconTiwt} =props;

    return (
        <div className="left_bar">
        {/* chap tomon navbar */}
        <div className="bar_side">
          <div className="icon_bar_side">
            {/* iconka uchun joy */}
            <img src={iconTiwt} alt="img" />
          </div>
          <div className="home_icon_bar">
            <span className="bar_side_home">
              <i className="material-icons small">home</i>
              <h6 style={{ marginLeft: "10px" }}>Home</h6>
            </span>
          </div>
          <div className="hashTag_icon">
            <span className="bar_side_home">
              <i className="material-icons small">menu</i>
              <h6 style={{ marginLeft: "10px" }}>explore</h6>
            </span>
          </div>
          <div className="notice_icon">
            <span className="bar_side_home">
              <i className="material-icons small">notifications_none</i>
              <h6 style={{ marginLeft: "10px" }}>Notification</h6>
            </span>
          </div>
          <div className="message_icon">
            <span className="bar_side_home">
              <i className="material-icons small">mail_outline</i>
              <h6 style={{ marginLeft: "10px" }}>Message</h6>
            </span>
          </div>
          <div className="book_icon">
            <span className="bar_side_home">
              <i className="material-icons small">bookmark</i>
              <h6 style={{ marginLeft: "10px" }}>Bookmarks</h6>
            </span>
          </div>
          <div className="lists_icon">
            <span className="bar_side_home">
              <i className="material-icons small">list</i>
              <h6 style={{ marginLeft: "10px" }}>Lists</h6>
            </span>
          </div>
          <div className="profile_icon">
            <span className="bar_side_home">
              <i className="material-icons small">person_outline</i>
              <h6 style={{ marginLeft: "10px" }}>Profile</h6>
            </span>
          </div>
          <div className="more_icon">
            <span className="bar_side_home">
              <i className="material-icons small">more_horiz</i>
              <h6 style={{ marginLeft: "10px" }}>More</h6>
            </span>
          </div>
          <div className="field_btn" onClick={postSend}>
            <button className="btn btn_left_bar">Tweet</button>
          </div>
        </div>
      </div>
    );
}

export default HomePageLeftPage;