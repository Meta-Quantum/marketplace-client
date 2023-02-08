import { Link } from "react-router-dom";
import NavBottom from "../NavBottom/NavBottom";

function NavBottomMenu() {
  return (
    <>
      <div className="categories-nav-modal">
        <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
      </div>
      <NavBottom />
    </>
  );
}

export default NavBottomMenu;
