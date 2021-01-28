import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import {  userState } from "../../Atoms";
import { useRecoilState } from "recoil";
import { Dropdown } from "react-bootstrap";
import { MdArrowDropDown } from "react-icons/md";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();

  const openMenu = () => {
    var navmenu = document.getElementById("navmenu");
    var hamburger = document.getElementById("burger");
    hamburger.classList.toggle("hamburger-open");
    navmenu.classList.toggle("open");
  };

  const [isAuth, setisAuth] = useState(false);


  const [userDetail, setuserDetail] = useRecoilState(userState);

  useEffect(() => {
    if (userDetail.email) {
      setisAuth(true);
    }
    return () => {};
  }, [isAuth]);

  const logout = () => {
    setuserDetail({ email: null, name: null, userToken: null });
    setisAuth(false);
    window.location.replace('/')
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <strong>
            <img src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/v1484077375/uy1e1bsv8gaqxwpzdubp.png" />
           Investment
          </strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            
         
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>


            {!isAuth && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                Login
                </Link>
              </li>
            )}

            {isAuth && (
              <li className="nav-item">
                <Dropdown>
                  <Dropdown.Toggle
                    className="navbar-dropdown"
                    id="dropdown-basic"
                  >
                    {userDetail.name} <MdArrowDropDown size={20} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                   <Dropdown.Item href="/studentdashboard">My Dashboard</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                     My Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => logout()}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
