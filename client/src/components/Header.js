import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui big inverted segment">
      <div className="ui container">
        <div className="ui huge inverted secondary pointing menu">
          <Link to="/" className="huge active item ">
            <i className="video camera icon"></i> BINH'S STREAMING SERVICE
          </Link>
          <div className="right menu">
            <GoogleAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
