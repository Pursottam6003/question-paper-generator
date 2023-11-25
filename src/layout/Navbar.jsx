import React from "react";
import { NavLink } from "react-router-dom";

// import { reelosvg } from "../assets/images/reelo.svg";

import reeloLogo from '../assets/reelo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container container">
                <div className="logo-wrapper">
                    <NavLink to="/" className="logo">
                        <img src={reeloLogo} alt="Reelo Logo" />
                    </NavLink>
                </div>
                <div className="nav-list-wrapper">
                    <ul className="nav-list">
                        <li className="nav-li">
                            <NavLink to='/'>Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;