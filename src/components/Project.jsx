export default function Project({
  projectImg,
  projectName,
  projectLink,
  projectDescription,
}) {
  return (
    <div className="flex w-full flex-row flex-wrap items-center justify-around gap-y-10 rounded-xl border-2 border-slate-400 p-5 font-alegreya drop-shadow-[5px_25px_25px_rgba(75,85,99,1)] sm:drop-shadow-none">
      <div className="overflow-hidden rounded-lg duration-300 hover:scale-105 sm:w-1/2 sm:drop-shadow-[5px_25px_25px_rgba(75,85,99,1)]">
        {projectLink.length ? (
          <a href={projectLink} target="blank">
            <img src={projectImg} alt="Project image"></img>
          </a>
        ) : (
          <img src={projectImg} alt="Project image"></img>
        )}
      </div>
      <div className="sm:w-1/3">
        <p className="mb-3 text-3xl font-semibold">{projectName}</p>
        <p className="text-gray-70 text-justify text-sm sm:text-lg">
          {projectDescription}
        </p>
      </div>
    </div>
  );
}
