import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from "../components/Menu";
import logo from "/logo.jpg";
//! Penser à attribuer un id au label du formulaire de contact

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (evt) =>
        onSelectMode(evt.matches ? "dark" : "light")
      );

    // Setup dark/light mode for the first time
    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => "");
    };
  }, []);

  const onSelectMode = (mode) => {
    setMode(mode);
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <header className="container">
      <div className={toggleMenu ? "header-open" : "header"}>
        <Link
          to="/"
          onClick={() => setToggleMenu(false)}
          aria-label="Back to the homepage"
          className="header-img"
        >
          <img
            className="header-img-logo"
            src={logo}
            alt="AS comme Alexandre Saint-Prix"
          />
        </Link>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="nav-link">
              <NavLink
                className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
                to="/portfolio"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* {mode === "dark" ? (
          <button onClick={() => onSelectMode("light")}>
            <p>Light</p>
          </button>
        ) : (
          <button onClick={() => onSelectMode("dark")}>
            <p>Dark</p>
          </button>
        )} */}

        <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </div>
    </header>
  );
};

export default Header;
