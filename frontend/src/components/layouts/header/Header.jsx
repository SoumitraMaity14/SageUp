import React from "react";
import "./Header.css";
import { FaBook, FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../../../assets/logo.png";

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    {/* Left side */}
                    <div className="nav-left">
                        <button className="mobile-menu-btn">
                            <CiMenuBurger />
                        </button>
                        <div className="logo">
                            <img src={Logo} alt="SageUp Logo" />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="nav-right">
                        <div className="search-bar">
                            <input
                                placeholder="Search here..."
                                className="search-input"
                                type="text"
                            />
                            <span className="search-icon-inside">
                                <FaSearch />
                            </span>
                        </div>
                        <div className="nav-links">
                            <a href="#">
                                <FaBook /> <span>Library</span>
                            </a>
                        </div>
                        <div className="profile-icon">
                            <FaUser />
                        </div>
                    </div>
                </nav>

            </div>
        </header>
    );
};

export default Header;
