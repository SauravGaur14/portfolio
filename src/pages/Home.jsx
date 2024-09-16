import Button from "../components/Button";

export default function Home() {
  function clickHandler() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const headerHeight = document.getElementById("header").offsetHeight;
      const offsetPosition = aboutSection.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "about");
    }
  }

  return (
    <div className="clip-path-skew min-h-screen w-full items-center justify-center overflow-x-hidden bg-red-100 py-20 font-alegreya">
      <main className="w-full p-5">
        <div className="animateBottomToTop flex h-max w-full flex-grow flex-col items-center justify-center">
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
