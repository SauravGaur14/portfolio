import { NavLink } from "react-router-dom";

export default function Button({ text, to }) {
  return (
    <NavLink
      to={to}
      className="h-16 w-64 rounded-xl bg-violet-700 pt-3 text-center font-sourceSans hover:scale-105 text-3xl font-medium text-white hover:bg-violet-600"
    >
      {text}
    </NavLink>
  );
}
