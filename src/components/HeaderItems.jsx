import { NavLink } from "react-router-dom";

export default function HeaderItems() {
  return (
    <>
      <NavLink to="/" className="hover:scale- font-medium hover:text-violet-700">
        Home
      </NavLink>
      <NavLink to="/about" className="hover:scale- font-medium hover:text-violet-700">
        About
      </NavLink>
      <NavLink to="/projects" className="hover:scale- font-medium hover:text-violet-700">
        Projects
      </NavLink>
      <NavLink to="/contact" className="hover:scale- font-medium hover:text-violet-700">
        Contact
      </NavLink>
    </>
  );
}
