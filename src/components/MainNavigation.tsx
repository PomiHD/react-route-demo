import { Link } from "react-router-dom";
import cssClasses from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <>
      <header className={cssClasses.header}>
        <nav>
          <ul className={cssClasses.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
