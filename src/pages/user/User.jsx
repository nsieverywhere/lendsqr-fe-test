import React from "react";
import { H6 } from "../../components/H6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

export default function User(props) {
  return (
    <div>
      <H6>USER</H6>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.profile.firstName}</td>
              <td>{item.profile.lastName}</td>
              <td>{item.email}</td>
              <td>{item.orgName}</td>
              <td>
                <Link class="active" to="/page/userdetails" id={item.id} state={{id:item.id, data:props.data}}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
