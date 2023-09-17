import { NavLink } from "react-router-dom";
import sauravGaurLogo from "../assets/sauravGaur.webp";

export default function Logo() {
  return (
    <NavLink to="/">
      <img
        src={sauravGaurLogo}
        className="h-24 object-cover  mix-blend-multiply"
      ></img>
    </NavLink>
  );
}
