/* eslint-disable jsx-a11y/img-redundant-alt */

import Popup from "../util/Popup";
import Input from "../components/Input";
import Button from "../components/Button";

import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

import { GithubUrl, LinkedUrl } from "../util/constants";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage1, setPopupMessage1] = useState("");
  const [popupMessage2, setPopupMessage2] = useState("");

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");

  function sendMsgHandler(e) {
    e.preventDefault();

    if (!name.length) {
      setShowPopup(true);
      setPopupMessage1("Name field is mandatory");
      return;
    }

    if (!email.length) {
      setShowPopup(true);
      setPopupMessage1("Email field is mandatory");
      return;
    }

    if (!message.length) {
      setShowPopup(true);
      setPopupMessage1("Message field is mandatory");
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        setShowPopup(true);
        setPopupMessage1("Thank you for reaching out!");
        setPopupMessage2("Will get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setShowPopup(true);
        setPopupMessage1("Error submitting the form.");
        setPopupMessage2("Please try again later.");
      });
  }

  return (
    <div className="clip-path-skew-top -mt-10 min-h-screen bg-fuchsia-100 pt-20">
      <div className="animateBottomToTop min-h-screen px-8 pb-10">
        <h1 className="text-3xl font-bold">Get in touch 👋</h1>
        <h3 className="mt-2 text-xl font-medium">
          Have Queries or Suggestions ? I'd love hearing from you!
        </h3>

        <div className="mt-10 flex w-full flex-col flex-wrap items-center justify-between gap-y-10 md:flex-row">
          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={sendMsgHandler}
            className="flex w-full flex-col gap-y-8 rounded-2xl border-2 border-gray-400 p-8 md:w-1/2"
          >
            <input type="hidden" name="form-name" value="contact" />
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              label="Name"
              placeholder="John Doe"
            />
            <Input
              id="email"
              name="email"
              value={email}
              type="email"
              label="Email"
              placeholder="john@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="message"
              name="message"
              value={message}
              type="text"
              label="Message"
              placeholder="Hello"
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="self-center">
              <Button text="Send" type="submit">
                Say Hii👋
              </Button>
            </div>
          </form>

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
          {showPopup && (
            <Popup
              message1={popupMessage1}
              message2={popupMessage2}
              onClick={() => {
                setShowPopup(false);
                setPopupMessage1("");
                setPopupMessage2("");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
