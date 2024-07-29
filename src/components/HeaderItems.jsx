import { NavLink } from "react-router-dom";

export default function HeaderItems() {
  return (
    <>
      <NavLink to="/" className="hover:scale-105 hover:text-violet-700">
        Home
      </NavLink>
      <NavLink to="/about" className="hover:scale-105 hover:text-violet-700">
        About
      </NavLink>
      <NavLink to="/projects" className="hover:scale-105 hover:text-violet-700">
        Projects
      </NavLink>
      <NavLink to="/contact" className="hover:scale-105 hover:text-violet-700">
        Contact
      </NavLink>
    </>
  );
}
