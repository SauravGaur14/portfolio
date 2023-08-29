import Header from "../components/Header";
import Skill from "../components/Skill";
import { ReactComponent as ArrowDownwardIcon } from "../assets/arrow_downward.svg";

export default function About() {
  return (
    <div className="flex w-full flex-col items-center overflow-hidden bg-gray-100 font-sourceSans text-black">
      <Header />
      <h1 className="mb-12 mt-8 w-3/5 text-center text-6xl font-bold">
        About me
      </h1>
      <div className="flex flex-wrap justify-evenly">
        <p className="w-2/4 text-xl font-normal leading-10 text-gray-700 ">
          Blending technical expertise with artistic flair, I specialize in
          crafting immersive user experiences and visually stunning interfaces.
          Proficient in HTML, CSS, JS, and Front-end frameworks like React JS, I
          bring a unique perspective to bridge the gap between design and
          development.
        </p>
        <div className="h-10 w-1/3 bg-red-300">Some image</div>
      </div>
      <ArrowDownwardIcon className="mb-14 h-52" />

      <div className="mb-10 flex w-4/5 flex-wrap gap-10">
        <Skill skill="React Js" />
        <Skill skill="Javascript" />
        <Skill skill="HTML" />
        <Skill skill="CSS" />
        <Skill skill="Tailwind" />
        <Skill skill="Adobe XD" />
        <Skill skill="Figma" />
      </div>
    </div>
  );
}
