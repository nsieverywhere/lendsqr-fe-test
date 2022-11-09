import React from "react";
import "./styles.scss";
import logo from "../../images/lendsqr.png";
import banner from "../../images/work.jpg";
import { H1 } from "../../components/Heading";
import { P } from "../../components/Text";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container-fluid body">
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={logo} alt="logo" className="logo" />
          <img src={banner} alt="banner" className=" img-fluid" />
        </div>
        <div className="col-12 col-lg-6 ">
          <H1>Welcome!</H1>
          <P colortext="#1f1f1f" size="0.9rem">
            Enter details to login.
          </P>
          <br />
          <form>
            <div class="form-group">
              <Input type="text" id="email" placeholder="Email" />
            </div>
            <div class="form-group">
              <Input type="password" id="password" placeholder="Password" />
            </div>
            <P colortext="#39CDCC">Forgot password?</P>
            <button type="submit" class="btn w-100 loginbtn">
              LOG IN
            </button>
            <Link class="active" to="/page">
              page
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
