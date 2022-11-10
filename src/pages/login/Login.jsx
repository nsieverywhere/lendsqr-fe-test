import React, { useState } from "react";
import "./styles.scss";
import logo from "../../images/lendsqr.png";
import banner from "../../images/work.jpg";
import { H1 } from "../../components/Heading";
import { P } from "../../components/Text";
import myInput  from "../../components/Input";
import { Link } from "react-router-dom";
import  {  Routes, useNavigate  } from 'react-router-dom'

export default function Login() {
  const user = { username: "user", password: "user" };
  const [details, setDetails] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();


  const submitHandler = (e) => {
    e.preventDefault();

    if(details.username === user.username && details.password === user.password){
        navigate('/page')
      
        //  return <Navigate to="/page"  />

    }

  };

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
            username = user, password = user
          </P>
          <br />
          <form onSubmit={submitHandler}>
            <div class="form-group">
              <input
              class="form-control"
                type="text"
                id="username"
                placeholder="username"
                value={details.username}
                onChange={ e => setDetails({...details, username: e.target.value})}
                
              />
            </div>
            <div class="form-group">
              <input class="form-control"
                type="password"
                id="password"
                placeholder="Password"
                value={details.password}
                onChange={ e => setDetails({...details, password: e.target.value})}
              
              />
            </div>
            <P colortext="#39CDCC">Forgot password?</P>
            <button type="submit" class="btn w-100 loginbtn">
              LOG IN
            </button>
          </form>

            <Link to="/page">
              page
          </Link>
        </div>
      </div>
    </div>
  );
}
