import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(css.navLink, isActive && css.active)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            clsx(css.navLink, isActive && css.active)
          }
        >
          PhoneBook
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
