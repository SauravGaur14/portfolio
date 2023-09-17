import Skill from "./Skill";
import reactJs from "../assets/reactJs.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import adobeXd from "../assets/adobeXd.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import github from "../assets/github.png";

export default function SkillSet() {
  return (
    <>
      <Skill skill="React Js" src={reactJs} />
      <Skill skill="React Native" src={reactJs} />
      <Skill skill="Javascript" src={js} />
      <Skill skill="HTML" src={html} />
      <Skill skill="CSS" src={css} />
      <Skill skill="Tailwind" src={tailwind} />
      <Skill skill="Adobe XD" src={adobeXd} />
      <Skill skill="Figma" src={figma} />
      <Skill skill="Git" src={git} />
      <Skill skill="Github" src={github} />
    </>
  );
}
