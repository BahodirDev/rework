import React from 'react';

function HomePageRightPage(props) {

    const {iconTiwt} = props

    return (
        <div className="right_bar">
        <div className="right_bar_info">
          <div className="right_input">
            <i className="material-icons small" style={{ marginRight: "20px" }}>
              search
            </i>
            <input
              type="text"
              className="form-control  "
              id="right_input_input"
              placeholder="Search Social"
            />
          </div>
          <div className="right_input_text_parent">
            <div className="right_input_text">
              <h5>
                <b>Trends for you</b>
              </h5>
            </div>
          </div>
          <div className="right_follow">
            <div className="right_follow_field">
              <h6>
                <b>Who to follow</b>
              </h6>
              <ul className="collection">
                <li className="collection-item avatar collection_style">
                  <img
                    src={iconTiwt}
                    alt=""
                    style={{ width: "50px" }}
                    className="circle"
                  />
                  <span className="title">Title</span>
                  <p>First Line Second Line</p>
                  <a href="#!" className="secondary-content">
                    <i className="material-icons">grade</i>
                  </a>
                </li>
                <li className="collection-item avatar collection_style">
                  <img
                    src={iconTiwt}
                    alt=""
                    style={{ width: "50px" }}
                    className="circle"
                  />
                  <span className="title">Title</span>
                  <p>First Line Second Line</p>
                  <a href="#!" className="secondary-content">
                    <i className="material-icons">grade</i>
                  </a>
                </li>
                <li className="collection-item avatar collection_style">
                  <img
                    src={iconTiwt}
                    alt=""
                    style={{ width: "50px" }}
                    className="circle"
                  />
                  <span className="title">Title</span>
                  <p>First Line Second Line</p>
                  <a href="#!" className="secondary-content">
                    <i className="material-icons">grade</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HomePageRightPage;