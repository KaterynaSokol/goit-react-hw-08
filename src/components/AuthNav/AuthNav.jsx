import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  return (
    <div className={css.authWrapper}>
      <NavLink
        to="/register"
        className={({ isActive }) => clsx(css.navLink, isActive && css.active)}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => clsx(css.navLink, isActive && css.active)}
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
