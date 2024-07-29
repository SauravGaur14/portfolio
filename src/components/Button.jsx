import { NavLink } from "react-router-dom";

export default function Button({ text, to }) {
  return (
    <NavLink
      to={to}
      className="h-16 w-64 items-center justify-center rounded-xl bg-violet-700 p-3 text-center font-alegreya text-3xl font-medium tracking-wide text-white duration-100 hover:scale-105 hover:bg-violet-600"
    >
      {text}
    </NavLink>
  );
}
