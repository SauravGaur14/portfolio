import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex h-24 w-full items-center justify-between bg-white text-black pl-10 pr-10">
      <Logo />
      <div className="flex gap-10 text-xl font-medium">
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </header>
  );
}
