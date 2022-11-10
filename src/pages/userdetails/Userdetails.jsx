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
    <div class="row">
      <H6>USER DETAILS</H6>
      <H1>Welcome!</H1>
      <div class="row overview">
        <div class="col-lg-3 ">
          <H6>Personal Information</H6>

          <p>
            Full Name: {object.profile.firstName} {object.profile.lastName}{" "}
          </p>
        </div>
        <div class="col-lg-3 ">
          <p>Email: {object.email} </p>
          <p>Phone: {object.phoneNumber} </p>
        </div>
        <div class="col-lg-3 ">
          <p>BVN: {object.profile.bvn} </p>
        </div>
        <div class="col-lg-3 ">
          <p>Gender: {object.profile.gender} </p>
        </div>
      </div>
      <div class="col-12 overview">
        <div class="col-lg-3 ">
          <H6>Education and Employment</H6>
        </div>
      </div>
    </div>
  );
}
