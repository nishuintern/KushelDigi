import React from "react";
import { NavLink } from "react-router-dom";
import companyLogo from "../assets/company_logo.svg";

const activeLinkClass =
  "bg-[#3C83CB] text-white rounded-md px-4 py-2 font-semibold";

const normalLinkClass =
  "hover:bg-[#3C83CB]-100 text-black rounded-md px-4 py-2 font-semibold";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLinkClass : normalLinkClass
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? activeLinkClass : normalLinkClass
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive ? activeLinkClass : normalLinkClass
                  }
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? activeLinkClass : normalLinkClass
                  }
                >
                  Protfolio
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="btn btn-ghost text-xl" to="/">
            <img src={companyLogo} alt="logo" className="h-12" />
          </NavLink>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-4 hidden lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : normalLinkClass
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : normalLinkClass
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : normalLinkClass
                }
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : normalLinkClass
                }
              >
                Protfolio
              </NavLink>
            </li>
          </ul>
          <NavLink to="/contact" className="btn rounded-full me-4 border border-black ">
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
