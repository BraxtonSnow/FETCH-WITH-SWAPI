import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/person-info">
        Person Info
      </NavLink>
    </div>
  );
}
