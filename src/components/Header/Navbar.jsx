import React from "react";
import { Link } from "react-router";
import { FaGithub } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { RiAppStoreLine } from 'react-icons/ri';
import { RiInstallLine } from 'react-icons/ri';

const Navbar = () => {
  const links = (
    <>
      <Link to='/' className="mr-8 flex items-center gap-1"><FaHome></FaHome>Home</Link>
      <Link to='/appsItems' className="mr-8 flex items-center gap-1"><RiAppStoreLine></RiAppStoreLine>Apps</Link>
      <Link to='/installation' className="flex items-center gap-1"><RiInstallLine></RiInstallLine>Installation</Link>
    </>
  );

  return (
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl text-[#9f62f2]">
          <span>
            <img className="h-9" src="/logo.png" alt="" />
          </span>
          HERO.IO
        </Link>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to='/' className="btn bg-linear-[125.07deg,#632ee3,#9f62f2] text-white">
          <FaGithub></FaGithub>Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
