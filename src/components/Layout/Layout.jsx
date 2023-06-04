import { Outlet, NavLink } from "react-router-dom";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.active : styles.link;
            }}
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.active : styles.link;
            }}
            to="/cart"
          >
            Shopping Cart
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
