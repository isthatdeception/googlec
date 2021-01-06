import React from "react";
import { Link } from "react-router-dom";

import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";

// local config
import "../css/Home.css";
import Search from "./Search";

// home
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          {/**Link */}
          <Link to="/about">About</Link>
          {/**Link */}
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          {/**Link */}
          <Link to="/gmail">Gmail</Link>
          {/**Link */}
          <Link to="/images">Images</Link>
          {/**Icon */}
          <AppsIcon />
          {/**Avatar */}
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        {/** body  */}
        <img
          src="https://www.strategicmanagementinsight.com/img/company-logos/google.png"
          alt="google-logo"
        />

        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
