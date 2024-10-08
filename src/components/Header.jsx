import Logo from "./Logo";
import Hamburger from "./Hamburger";
import HeaderItems from "./HeaderItems";

export default function Header({
  onHomeClick,
  onAboutClick,
  onProjectsClick,
  onContactClick,
}) {
  return (
    <header
      className="fixed z-50 flex h-24 w-full items-center justify-between bg-gray-100 px-6 py-1 font-alegreya shadow-2xl"
      id="header"
    >
      <Logo onClick={onHomeClick} />

      <div className="group relative text-xl">
        <div className="flex md:hidden">
          <Hamburger />
        </div>

        <div
          id="navContainer"
          className="-bottom-68 absolute -left-20 z-50 hidden flex-col gap-y-5 rounded-md bg-[#f5f5f5] px-10 py-14 drop-shadow-[5px_25px_25px_rgba(75,85,99,1)] group-focus-within:flex group-hover:flex group-focus:flex"
        >
          <HeaderItems
            onHomeClick={onHomeClick}
            onAboutClick={onAboutClick}
            onProjectsClick={onProjectsClick}
            onContactClick={onContactClick}
          />
        </div>
      </div>

      <div className="hidden items-center justify-between gap-6 text-lg font-bold sm:text-2xl md:flex ">
        <HeaderItems
          onHomeClick={onHomeClick}
          onAboutClick={onAboutClick}
          onProjectsClick={onProjectsClick}
          onContactClick={onContactClick}
        />
      </div>
    </header>
  );
}
