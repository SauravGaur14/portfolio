import Header from "../components/Header";


export default function Home() {
  return (
    <div className="bg-hero_pattern bg-cover h-screen">
      <Header />
      <main>
        <div className="flex flex-col items-center flex-grow-1 gap-10 h-max mt-40 ">
          <p className="text-5xl font-bold">Hey 👋 I'm Saurav Gaur</p>
          <p className="text-4xl font-semibold">I'm a Front Developer and a UX | UI Designer</p>
          <p className="text-2xl font-normal">
            From Wireframes to Webpages, I Shape Digital Dreams – Front-End
            Developer and UX/UI Maestro.
          </p>
        </div>
      </main>
    </div>
  );
}
