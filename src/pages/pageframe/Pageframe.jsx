import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import "./styles.scss";

export default function Pageframe() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div class="page">
        <Outlet />
      </div>
    </>
  );
}
