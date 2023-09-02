import { Form, NavLink } from "react-router-dom";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div className="bg-hero_pattern">
      <Header />
      <div className="h-screen pl-10 pt-5">
        <h1 className="text-3xl font-bold">Get in touch 👋</h1>
        <h3 className="mt-8 text-xl font-medium">
          Have Queries or Suggestions ? I'd love hearing from you!{" "}
        </h3>

        <div className="flex flex-wrap items-center gap-x-28">
          <Form className="mt-10 flex h-[27rem] w-1/2 flex-col gap-y-4 rounded-2xl bg-gray-200 pl-10">
            <div className="mt-8 flex flex-col">
              <label htmlFor="name" className="text-lg font-bold">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="h-10 w-80 rounded-3xl bg-gray-50 pl-4 outline-none ring-gray-500 focus:ring-1"
                id="name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="emial" className="text-lg font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="john@gmail.com"
                className="h-10 w-80 rounded-3xl bg-gray-50 pl-4 outline-none ring-gray-500 focus:ring-1"
                id="email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-bold">
                Message
              </label>
              <input
                type="textarea"
                placeholder="Hii there !"
                className="h-28 w-80 rounded-2xl bg-gray-50 pl-4 outline-none ring-gray-500 focus:ring-1"
                id="message"
              />
            </div>
            <div className="self-end pr-10">
              <button
                type="submit"
                className="h-12 w-40 self-end rounded-xl bg-violet-700 text-center font-sans hover:scale-105 text-2xl font-medium text-white hover:bg-violet-600"
              >
                Say Hii👋
              </button>
            </div>
          </Form>

          <div>
            <h2 className="text-2xl font-semibold">Feeling Social ?😃</h2>
            <p className="mb-1 mt-3 text-xl font-medium">
              Find me on these online spaces too
            </p>
            <div className="flex h-11 gap-x-7">
              <NavLink to="https://www.linkedin.com" target="blank">
                <Linkedin className="h-10 w-10" />
              </NavLink>
              <NavLink to="https://www.facebook.com" target="blank">
                <Facebook className="h-10 w-10" />
              </NavLink>
              <NavLink to="https://www.twitter.com" target="blank">
                <Twitter className="h-11 w-11" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
