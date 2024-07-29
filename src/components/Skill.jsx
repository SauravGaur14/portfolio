/* eslint-disable jsx-a11y/img-redundant-alt */

export default function Skill({ skill, src }) {
  return (
    <div className="flex h-40 w-32 flex-col items-center justify-center gap-y-1 rounded-xl border bg-gradient-to-r  from-fuchsia-300 to-yellow-500 p-5 shadow-2xl duration-300 hover:scale-125 sm:w-48">
      <img src={src} alt="Skill logo" className="w-12 object-fill" />
      <p className="text-center font-alegreya text-2xl font-medium text-gray-950">
        {skill}
      </p>
    </div>
  );
}
