import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";

const Navbar = () => {

const [getTheme, setTheme] = useContext(ThemeContext);
const root = window.document.documentElement;

// const toggleTheme = () => {
//     setTheme(getTheme === "light" ? "dark" : "light");
//   };

const handleTheme = () => {
if (getTheme === "light") {
    root.classList.add("dark");
    root.classList.remove("light");
    setTheme("dark");
  } else {
    root.classList.add("light");
    root.classList.remove("dark");
    setTheme("light");
  }};

console.log(getTheme);

  return (
    <div className=" sticky top-0 z-50">
      <div className="navbar bg-base-200/85 dark:bg-black-900 backdrop-blur-2xl shadow-lg shadow-black/5">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">Restawuran.</a>
        </div>
        <div className="flex-none justify-center">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/countries">Countries</Link>
            </li>
            <li>
              <Link to="/profil">Profil</Link>
            </li>
          </ul>
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              onChange={(e) => handleTheme(e.target.value)}
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
