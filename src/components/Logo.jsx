import logo from "../assets/logo.svg";

export default function Logo() {
  return (
    <a href="#section">
      <img src={logo} className="h-auto w-full max-w-[200px]" alt="logo"></img>
    </a>
  );
}
