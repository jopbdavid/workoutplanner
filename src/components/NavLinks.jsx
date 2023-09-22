import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineSchedule,
} from "react-icons/ai";

const links = [
  { id: 1, url: "/", text: "Home", icon: <AiOutlineHome size={20} /> },
  {
    id: 2,
    url: "about",
    text: "About",
    icon: <AiOutlineInfoCircle size={20} />,
  },
  {
    id: 3,
    url: "planner",
    text: "Planner",
    icon: <AiOutlineSchedule size={20} />,
  },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text, icon } = link;
        // if ((url === "checkout" || url === "orders") && !user) return null;
        return (
          <li key={id}>
            <NavLink className="capitalize px-20" to={url}>
              {icon}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
