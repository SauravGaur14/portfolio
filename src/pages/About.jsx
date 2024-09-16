import SkillSet from "../components/SkillSet";
import heroImage from "../assets/hero.webp";
import { useRef } from "react";

export default function About() {
  const skillRef = useRef();
  function clickHandler() {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="-mt-24 min-h-[screen] bg-fuchsia-100 sm:-mt-20">
      <div className="flex flex-col items-center overflow-hidden p-3 font-alegreya text-black">
        <div className="animateBottomToTop">
          <div className="flex justify-center">
            <h1 className="mb-10 mt-20 text-center text-4xl font-bold sm:text-6xl">
              About me
            </h1>
          </div>
          <div className="mb-14 flex w-screen flex-row flex-wrap items-center justify-evenly p-7 sm:w-full">
            <div className="flex-wrap sm:w-7/12">
              <p className="text-justify font-normal leading-7 text-gray-700 sm:text-xl sm:leading-10">
                Blending technical expertise with artistic flair, I specialize
                in crafting immersive user experiences and visually stunning
                interfaces. Proficient in HTML, CSS, JS, and Front-end
                frameworks like React JS, I bring a unique perspective to bridge
                the gap between design and development.
              </p>
            </div>

            <div className=" mt-3 sm:mt-0">
              <img className="" width={400} src={heroImage} alt="heroImage" />
            </div>
          </div>

          <div
            className="mb-10 text-center font-sans text-7xl text-violet-700 duration-75 hover:cursor-pointer hover:text-violet-800 motion-safe:animate-bounce"
            onClick={clickHandler}
          >
            &#x2193;
          </div>
        </div>
        <div
          className="mb-6 flex min-h-screen w-full flex-col items-center"
          ref={skillRef}
        >
          <h1 className="custom-word-spacing mb-12 mt-10 w-3/5 text-center text-6xl font-bold ">
            My Tech Stack
          </h1>
          <div className="mb-10 flex w-full flex-wrap items-center justify-center gap-10">
            <SkillSet />
          </div>
        </div>
      </div>
    </div>
  );
}
