import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities" />
          Cities
        </li>
        <li>
          <NavLink to="countries" />
          Countries
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
