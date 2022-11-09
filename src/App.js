import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import { Route, Routes } from "react-router-dom";
import User from './pages/user/User';
import Userdetails from './pages/userdetails/Userdetails';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pageframe from './pages/pageframe/Pageframe';




function App() {

   const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} exact />
        {/* <Route path="page" element={<Pageframe />} >
          <Route
            path="dashboard"
            element={<Dashboard data={data} />}
          />
          <Route path="user" element={<User data={data} />} />
          <Route path="userdetails" element={<Userdetails />} />
        </Route> */}
      </Routes>
      
      
    </div>
  );
}

export default App;
