import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Logo() {
  return (
    <NavLink to="/">
      <img src={logo} className="h-auto w-full max-w-[200px]" alt="logo"></img>
    </NavLink>
  );
}
