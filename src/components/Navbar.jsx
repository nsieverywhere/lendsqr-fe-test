import React from "react";
import logo from "../images/lendsqr.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "../components/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from "./Btn";
import { Link } from "react-router-dom";
import Input from "./Input";
import { Btn1 } from "./Btn";
import IconButton from "@material-ui/core/IconButton";

export default function Navbar() {
  return (
    <>
      <nav id="nav" class="navbar navbar-light bg-light">
        <div class="col-4">
          <Link class="navbar-brand" to="/">
            <img src={logo} height="30" alt="" />
          </Link>
        </div>
        <div class="col-4">
          <div class="input-group mb-3">
            <Input
              class="searchfield"
              type="text"
              id="search"
              placeholder="Search"
            />

            <Btn1 className="btn">
              Search
              <FontAwesomeIcon
                className="searchicon"
                icon={faMagnifyingGlass}
              />
            </Btn1>
          </div>
        </div>
        <div class="col-4 text-end">
          <Link class="me-auto" to="/notify">
            <IconButton>
              <FontAwesomeIcon className="icon" icon={faBell} />
            </IconButton>
          </Link>
        </div>
      </nav>
    </>
  );
}
