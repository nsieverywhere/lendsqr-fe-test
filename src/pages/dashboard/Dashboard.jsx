import React, { useEffect, useState } from "react";
import { Cardbox } from "../../components/Card";
import { H6 } from "../../components/H6";
import "./styles.scss";
import { P } from "../../components/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faCoins } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function Dashboard(props) {
  return (
    <div>
      <H6>DASHBOARD</H6>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3">
          <Cardbox>
            <FontAwesomeIcon icon={faUser} />
            <P color="gray" size="0.8rem">
              USERS
            </P>
            <H6>{props.data.length}</H6>
          </Cardbox>
        </div>
        <div class="col-md-6 col-lg-3">
          <Cardbox>
            <FontAwesomeIcon icon={faUsers} />
            <P color="gray" size="0.8rem">
              ACTIVE USERS
            </P>
            <H6>2,453</H6>
          </Cardbox>
        </div>
        <div class="col-md-6 col-lg-3">
          <Cardbox>
            <FontAwesomeIcon icon={faNoteSticky} />
            <P color="gray" size="0.8rem">
              USERS WITH LOANS
            </P>
            <H6>12,453</H6>
          </Cardbox>
        </div>
        <div class="col-md-6 col-lg-3">
          <Cardbox>
            <FontAwesomeIcon icon={faCoins} />
            <P color="gray" size="0.8rem">
              USERS WITH SAVINGS
            </P>
            <H6>102,453</H6>
          </Cardbox>
        </div>
      </div>
    </div>
  );
}
