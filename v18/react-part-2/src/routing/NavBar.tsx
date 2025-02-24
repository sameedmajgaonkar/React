import { NavLink, NavLinkRenderProps } from "react-router";

const NavBar = () => {
  const styleActiveLink = ({ isActive }: NavLinkRenderProps) =>
    isActive ? { fontSize: "1.1rem" } : {};
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a href="" className="navbar-brand">
          NavBar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav collapse navbar-collapse" id="navbarContent">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" style={styleActiveLink}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link" style={styleActiveLink}>
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" style={styleActiveLink}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
