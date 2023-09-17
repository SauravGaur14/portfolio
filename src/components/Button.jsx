import { NavLink } from "react-router-dom";

export default function Button({ text, to }) {
  return (
    <NavLink
      to={to}
      className="h-16 w-64 rounded-xl bg-violet-700 pt-3 text-center font-sourceSans text-3xl font-medium text-white hover:scale-105 hover:bg-violet-600 hover:tracking-wide duration-100"
    >
      {text}
    </NavLink>
  );
}
