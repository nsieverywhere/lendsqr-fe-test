import React from "react";
import "../components/sidebar.scss";
import { P } from "./Text";
import { Link } from "react-router-dom";
import {
  faGauge,
  faUser,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link class="active" to="/page/dashboard">
        <FontAwesomeIcon className="icon" icon={faGauge} />
        Dashboard
      </Link>
      <br />
      <P colortext="#213F7D" size="0.8rem">
        CUSTOMERS
      </P>
      <Link to="/page/user">
        <FontAwesomeIcon className="icon" icon={faUser} />
        user
      </Link>
      <Link to="/page/userdetails">
        <FontAwesomeIcon className="icon" icon={faCircleInfo} />
        Userdetails
      </Link>
    </div>
  );
}
