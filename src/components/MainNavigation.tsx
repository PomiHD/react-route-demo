import { NavLink } from "react-router-dom";
import cssClasses from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <>
      <header className={cssClasses.header}>
        <nav>
          <ul className={cssClasses.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? cssClasses.active : undefined
                }
                end //this is to make sure that the link is only active when the path is exactly the same as the link

                // style={({ isActive }) => ({
                //   textDecoration: isActive ? "underline" : undefined,
                //   color: isActive ? "red" : undefined,
                // })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? cssClasses.active : undefined
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
