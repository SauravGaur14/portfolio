import React from "react";

export default function Hamburger() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-lg mix-blend-luminosity">
      <button className="group flex h-8 w-8 cursor-pointer flex-col items-center justify-between p-1.5">
        <span className="duration-400 h-0.5 w-full rounded-sm bg-blue-600 shadow-[0_0.5px_2px_rgba(0,0,0,0.2)] transition-all group-hover:translate-y-[11px] group-hover:rotate-[-45deg] group-hover:bg-red-600"></span>
        <span className="duration-400 h-0.5 w-full rounded-sm bg-blue-600 shadow-[0_0.5px_2px_rgba(0,0,0,0.2)] transition-all group-hover:translate-x-[-50%] group-hover:opacity-0"></span>
        <span className="duration-400 h-0.5 w-full rounded-sm bg-blue-600 shadow-[0_0.5px_2px_rgba(0,0,0,0.2)] transition-all group-hover:translate-y-[-11px] group-hover:rotate-[45deg] group-hover:bg-red-600"></span>
      </button>
    </div>
  );
}
