import Project from "../components/Project";
import Header from "../components/Header";
import worldwise from "../assets/worldwise3.jpeg";


export default function Projects() {
  return (
    <div className="bg-gray-100 gap-y-11">
      <Header />
      <p className="font-semibold text-5xl pl-10 font-sans mt-10 mb-8 text-center">Some of my recent works😉</p>
      <div className="gap-y-11 flex flex-col">
        <Project
          projectName="Worldwise"
          projectImg={worldwise}
          projectDescription="You travel the world. WorldWise keeps track of your adventures. A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world."
        />

        <Project
          projectName="Worldwise"
          projectImg={worldwise}
          projectDescription="You travel the world.WorldWise keeps track of your adventures. A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world."
        />

        <Project
          projectName="Worldwise"
          projectImg={worldwise}
          projectDescription="You travel the world. WorldWise keeps track of your adventures. A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world."
        />
      </div>
    </div>
  );
}
