import React from "react";
import { H6 } from "../../components/H6";
import { useLocation } from "react-router-dom";
import "./styles.scss";
import { H1 } from "../../components/Heading";

export default function Userdetails() {
  const location = useLocation();
  const data = location.state.data;
  const id = location.state.id;

  const object = data.find((obj) => obj.id === id);

  console.log(object.profile.firstName);

  return (
    <div>
      <H6>USER DETAILS</H6>
      <H1>Welcome!</H1>
      <div class="col-12 overview">
        <p>First Name: {object.profile.firstName} </p>
        <p>Last Name: {object.profile.lastName} </p>
      </div>
      <div class="col-12 overview"></div>
    </div>
  );
}
