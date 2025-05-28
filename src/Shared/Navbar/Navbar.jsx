import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 z-50  bg-base-100 shadow-md px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/">Dashboard</a></li>
            <li><a href="/tasks">Tasks</a></li>
            <li><a href="/goals">Goals</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-bold text-primary">TaskZen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/tasks">Tasks</a></li>
          <li><a href="/goals">Goals</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/40" alt="User" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
