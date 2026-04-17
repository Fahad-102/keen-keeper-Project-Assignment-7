import React from 'react';
import { NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    return (
       <div className='shadow bg-base-200'>
  <div className="max-w-7xl  mx-auto flex justify-between items-center gap-4">
    <img src="/src/assets/images/logo.png" alt="keenkeeper Logo" />
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1  gap-3">
        <li>
          <NavLink to="/home" className={({isActive})=>isActive ? "bg-green-950 text-white" : ""}>
            <IoHomeOutline/> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/timeline" className={({isActive})=>isActive ? "bg-green-950 text-white" : ""}>
            <IoTimeOutline /> TimeLine
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats" className={({isActive})=>isActive ? "bg-green-950 text-white" : ""}>
            <ImStatsDots /> Stats
          </NavLink>
        </li>
      </ul>
    </div>

  </div>
</div> 
    );
};

export default Navbar;