import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
export default function AuthNavigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>

      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
    </nav>
  );
}
