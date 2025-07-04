import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBook, FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="nav-left">
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <CiMenuBurger />
            </button>

            <motion.div
              className="logo"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="logo-icon">📘</div>
              <div className="logo-text">SageUp</div>
            </motion.div>
          </div>

          <div className="nav-right desktop-only">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                placeholder="Search here..."
                className="search-input"
                type="text"
              />
            </div>

            <a href="#" className="nav-link">
              <FaBook /> <span>Library</span>
            </a>

            <div className="profile-icon">
              <FaUser />
            </div>
          </div>
        </nav>

        {/* Mobile Menu Animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="nav-right mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="search-bar">
                <FaSearch className="search-icon" />
                <input
                  placeholder="Search here..."
                  className="search-input"
                  type="text"
                />
              </div>

              <a href="#" className="nav-link">
                <FaBook /> <span>Library</span>
              </a>

              <div className="profile-icon">
                <FaUser />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
