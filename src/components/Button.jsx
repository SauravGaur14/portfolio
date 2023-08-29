import { NavLink } from "react-router-dom";

export default function Button({ text }) {
  return (
    <NavLink
      to="/about"
      className="h-16 w-64 rounded-xl bg-violet-700 pt-3 text-center font-sourceSans text-3xl font-medium text-white"
    >
      {text}
    </NavLink>
  );
}
