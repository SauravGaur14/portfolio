/* eslint-disable jsx-a11y/img-redundant-alt */

import { Form } from "react-router-dom";

import Input from "../components/Input";
import Header from "../components/Header";
import Button from "../components/Button";

import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

import { GithubUrl, LinkedUrl } from "../util/constants";

export default function Contact() {
  function sendMsgHandler(e) {
    e.preventDefault();
    alert("Get in touch on Linkedin");
  }
  return (
    <div className="bg-red-100 md:bg-hero_pattern">
      <Header />
      <div className="animateBottomToTop min-h-screen px-8 pb-10">
        <h1 className="mt-6 text-3xl font-bold">Get in touch 👋</h1>
        <h3 className="mt-2 text-xl font-medium">
          Have Queries or Suggestions ? I'd love hearing from you!
        </h3>

        <div className="mt-10 flex w-full flex-col flex-wrap items-center justify-between gap-y-10 md:flex-row">
          <Form className="flex w-full flex-col gap-y-8 rounded-2xl border-2 border-gray-400 p-8 md:w-1/2">
            <Input id="name" type="text" label="Name" placeholder="John Doe" />
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="john@gmail.com"
            />
            <Input
              id="message"
              type="text"
              label="Message"
              placeholder="Hello"
            />
            <div onClick={sendMsgHandler} className="self-center">
              <Button text="Say Hii👋" type="submit">
                Say Hii👋
              </Button>
            </div>
          </Form>

          <div>
            <h2 className="text-2xl font-semibold">Feeling Social ?😃</h2>
            <p className="mb-1 mt-3 text-xl font-medium">
              Find me on these online spaces too
            </p>
            <div className="flex h-11 items-baseline gap-x-7">
              <a href={LinkedUrl} target="blank">
                <img src={Linkedin} alt="" className="h-10 w-10" />
              </a>
              <a href={GithubUrl} target="blank">
                <img src={Github} className="h-9 w-9" alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
