import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex h-24 w-full items-center justify-between pl-10 pr-10  ">
      <Logo />
      <div className="flex gap-9 font-sans text-2xl font-bold ">
        <NavLink to="/" className="hover:text-violet-700">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-violet-700">
          About
        </NavLink>
        <NavLink to="/projects" className="hover:text-violet-700">
          Projects
        </NavLink>
        <NavLink to="/contact" className="hover:text-violet-700">
          Contact
        </NavLink>
      </div>
    </header>
  );
}
