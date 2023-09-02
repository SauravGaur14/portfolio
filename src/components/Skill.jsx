export default function Skill({ skill, src }) {
  return (
    <div className="flex h-28 w-48 flex-col items-center justify-center gap-y-1 rounded-xl  shadow-2xl hover:scale-110 border from-fuchsia-300 to-yellow-500 bg-gradient-to-r duration-100">
      <img src={src} alt="Skill logo" className=" w-12 object-cover" />
      <p className="text-center font-sourceSans text-2xl font-medium text-gray-950">
        {skill}
      </p>
    </div>
  );
}
