import React, { useState } from "react";
import "../styles/home.css";
import iconTiwt from "../assets/twitterIcon.png";
import HomePageLeftPage from "../Portions/HomePageLeftPage";
import HomePageCenterPage from "../Portions/HomePageCenterPage";
import HomePageRightPage from "../Portions/HomePageRightPage";
import HomePageModal from "../Portions/HomePageModal";

function HomePage(props) {
  const [text, setText] = useState("");
  const [publishModal, setPublishModal] = useState(false);
  const postSend = () => {

    setPublishModal(!publishModal);
  };

  const publish = () => {
    fetch("http://localhost:5000/createpost", {
      method: "post",
      headers: {
        Authorization: localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
      body: {
        text: text,
      },
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
      });
  };



  return (
    <div className="home_page">
      left bar icons
      <HomePageLeftPage postSend={postSend} iconTiwt={iconTiwt} />
      {/* center */}
      <HomePageCenterPage iconTiwt={iconTiwt}  />
      {/* right bar config */}
      <HomePageRightPage iconTiwt={iconTiwt} />
      <HomePageModal publishModal={publishModal} postSend={postSend} text={text} setText={setText} publish={publish} />      
    </div>
  );
}

export default HomePage;
