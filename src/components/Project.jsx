export default function Project({
  projectName,
  projectDescription,
  projectImg,
}) {
  return (
    <div className="flex h-80 w-full flex-wrap items-center justify-around">
      <div className="w-[47%] overflow-hidden rounded-sm mix-blend-darken drop-shadow-[5px_25px_25px_rgba(75,85,99,1)] duration-100 hover:scale-105">
        <img src={projectImg} alt="Project image"></img>
      </div>
      <div className="w-5/12">
        <p className="mb-3 text-2xl font-semibold">{projectName}</p>
        <p className="text-lg text-gray-700">{projectDescription}</p>
      </div>
    </div>
  );
}
