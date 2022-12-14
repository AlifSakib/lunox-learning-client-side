import React, { useContext, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { AuthContext } from "../../contexts/AuthProvider";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="px-4 py-5  dark:bg-slate-900 dark:text-white z-10">
        <div className="relative flex items-center justify-between mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 z-10">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-purple-400 rounded-full"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-white">
              _Lunox
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex dark:text-white">
            <li>
              <button
                onClick={handleTheme}
                aria-label="Lunox"
                title="Lunox"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
              >
                {theme === "dark" ? (
                  <FaMoon className="w-6 h-6 mt-2 text-blue-600"></FaMoon>
                ) : (
                  <FaSun className="w-6 h-6 mt-2 text-yellow-400"></FaSun>
                )}
              </button>
            </li>
            <li>
              <NavLink
                to="/home"
                aria-label="Home"
                title="Home"
                // className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 dark:text-white"

                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400 text-blue-400 underline underline-offset-4"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                aria-label="Courses"
                title="Courses"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400 text-blue-400 underline underline-offset-4"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                aria-label="Blogs"
                title="Blogs"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400 text-blue-400 underline underline-offset-4"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                aria-label="FAQ"
                title="FAQ"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400 text-blue-400 underline underline-offset-4"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                FAQ
              </NavLink>
            </li>
            {user && (
              <li>
                <Link
                  data-tip
                  data-for="username"
                  to="/profile"
                  aria-label="About us"
                  title=""
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <div className="flex justify-center items-center space-x-6 text-pink-500">
                    <div>{user.displayName}</div>

                    <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                      {user?.photoURL ? (
                        <img src={user.photoURL} alt="" />
                      ) : (
                        <svg
                          className="absolute -left-1 w-12 h-12 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </div>
                </Link>
                {user.displayName && (
                  <ReactTooltip id="username" place="top" effect="solid">
                    {user.displayName}
                  </ReactTooltip>
                )}
              </li>
            )}
            {user?.uid ? (
              <li>
                <Link to="/login">
                  <button
                    onClick={logOutUser}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none rounded-full"
                    aria-label="Sign out"
                    title="Logout"
                  >
                    Logout
                  </button>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none rounded-full"
                  aria-label="Register"
                  title="Register"
                >
                  Register
                </Link>
              </li>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-purple-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          _Lunox
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Courses"
                          title="Courses"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blogs"
                          aria-label="Blogs"
                          title="Blogs"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 dark:text-white"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="FAQ"
                          title="FAQ"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 dark:text-white"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        {user?.uid ? (
                          <li>
                            <Link to="/login">
                              <button
                                onClick={logOutUser}
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none rounded-full"
                                aria-label="Sign out"
                                title="Logout"
                              >
                                Logout
                              </button>
                            </Link>
                          </li>
                        ) : (
                          <li>
                            <Link
                              to="/register"
                              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none rounded-full"
                              aria-label="Register"
                              title="Register"
                            >
                              Register
                            </Link>
                          </li>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
