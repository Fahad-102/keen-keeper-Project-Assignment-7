import React from 'react';
import { NavLink } from 'react-router'; 
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import logo from "/src/assets/images/logo.png"

const Navbar = () => {
    const activeLink = "bg-green-950 text-white font-bold";
    const normalLink = "hover:bg-green-100 transition-colors";

    return (
        <div className='shadow bg-base-200 sticky top-0 z-50'>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
  
                <div className="flex items-center">
                    <img src={logo} alt="KeenKeeper Logo" className="h-10 w-auto" />
                </div>

              
                <div className="flex-none">
                    <ul className="menu menu-horizontal gap-2 p-0">
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                <IoHomeOutline /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/timeline" className={({isActive}) => isActive ? activeLink : normalLink}>
                                <IoTimeOutline /> Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/stats" className={({isActive}) => isActive ? activeLink : normalLink}>
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