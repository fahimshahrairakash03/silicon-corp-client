import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const menuItem = (
    <>
      <Link to="/">
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to="/services">
        <li>
          <a>Products</a>
        </li>
      </Link>
      <Link to="/addproduct">
        <li>
          <a>Add Products</a>
        </li>
      </Link>
      {user?.uid ? (
        <>
          <Link>
            <li>
              <p className="font-bold">{user.displayName}</p>
            </li>
          </Link>
          <Link>
            <li>
              <button
                onClick={logout}
                className="btn btn-outline btn-secondary"
              >
                SignOut
              </button>
            </li>
          </Link>
        </>
      ) : (
        <Link to="/register">
          <li>
            <a>Register</a>
          </li>
        </Link>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl font-bold">
            Sili-Corp
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
