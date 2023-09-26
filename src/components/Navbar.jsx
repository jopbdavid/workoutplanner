import React, { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import logo from "../assets/logos/android-chrome-512x512.png";
import logob from "../assets/logos/android-chrome-512x512-brown.png";

const Navbar = () => {
  const themes = { autumn: "autumn", forest: "forest" };
  const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem("theme") || themes.forest;
    document.documentElement.setAttribute("data-theme", theme);
  };

  const toggleTheme = () => {
    const newTheme = theme === themes.forest ? themes.autumn : themes.forest;
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center bg-neutral"
          >
            <img
              src={`${theme === "forest" ? logo : logob}`}
              alt="logo"
              className="h-10 w-10"
            />
            Iron
            <span
              className={`italic font-semibold ${
                theme === "forest" ? "text-slate-200" : "text-slate-900"
              }`}
            >
              Cycles
            </span>
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ml-16">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" />

            <BsSunFill className="swap-on h-6 w-6" onClick={toggleTheme} />

            <BsMoonFill className="swap-off h-6 w-6" onClick={toggleTheme} />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
