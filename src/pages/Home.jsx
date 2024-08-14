import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";

export default function Home() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/about");
  }
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-red-100 bg-cover font-alegreya md:bg-hero_pattern">
      <Header />
      <main className="w-full p-5">
        <div className="animateBottomToTop mt-32 flex h-max w-full flex-grow flex-col items-center justify-center">
          <p className="mb-14 text-center text-5xl font-extrabold">
            Hey, <span className="shakeEmoji">👋</span> I'm Saurav Gaur
          </p>
          <p className="linearGradient mb-4 bg-clip-text text-center  text-4xl font-semibold text-slate-700 text-transparent">
            A Full Stack Developer and a UX|UI Designer
          </p>

          <p className="animateLeftToRight mb-14 text-center text-2xl font-medium text-slate-500">
            "Designing with precision and Developing with passion, turning
            wireframes to reality"
          </p>
          <Button onClick={clickHandler} text="About Me" />
        </div>
      </main>
    </div>
  );
}
