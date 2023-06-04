import { NavLink, Outlet } from "react-router-dom";
import styles from "./Shop.module.css";

export const Shop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div>
          <h2>Shops:</h2>
          <ul className={styles.shoplist}>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active : styles.link;
                }}
                to="pizzas"
              >
                Pizzas
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active : styles.link;
                }}
                to="Hamburgers"
              >
                Hamburgers
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? styles.active : styles.link;
                }}
                to="soups"
              >
                Soups
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
