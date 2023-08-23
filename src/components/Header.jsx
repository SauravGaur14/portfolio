import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between border-2 border-black  pl-10 pr-10 items-center h-24">
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
