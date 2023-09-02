import Button from "../components/Button";
import Header from "../components/Header";
// import bg1 from "../assets/bg1.jpg";

export default function Home() {
  return (
    <div className="h-screen bg-hero_pattern bg-cover font-sans">
      <Header />
      <main>
        <div className="flex-grow-1 mt-32 flex h-max flex-col items-center gap-10 ">
          <p className="text-5xl font-extrabold">Hey, 👋 I'm SAURAV GAUR</p>
          <p className="text-3xl font-normal">
            I'm a Front Developer and a UX | UI Designer
          </p>
          <p className="text-2xl font-normal">
            From Wireframes to Webpages, I Shape Digital Dreams – Front-End
            Developer and UX/UI Maestro.
          </p>
          <Button text="About Me" to="about" />
        </div>
      </main>
    </div>
  );
}
