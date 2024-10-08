import logo from "../assets/logo.svg";

export default function Logo({ onClick }) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <img src={logo} className="h-auto w-full max-w-[200px]" alt="logo"></img>
    </div>
  );
}
