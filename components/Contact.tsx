import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {
  return (
    <section id="contact">
      <div className="my-12 pb-0 md:pt-16 md:pb-10">
        <h1 className="text-center font-bold text-4xl">
          Contact
          <hr className="w-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          <br />
        </h1>
        <p className="text-center text-xl font-light mb-7">
          I am living in<a className="font-semibold"> Salem, OH, </a>but as a
          <a className="font-semibold"> freelancer, </a>I am available to
          <a className="font-semibold"> travel within the United States </a>and
          I can work<a className="font-semibold"> remotely </a>
          for other countries or states.
        </p>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-20 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Social Networks
            </h1>
            <div className="flex flex-row items-center justify-center space-x-2 mb-1">
            <a
                href="https://www.linkedin.com/in/donovan-villanueva-906716197"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineLinkedin
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={40}
                />
              </a>
              <a
                href="https://x.com/donovandevgt"
                rel="noreferrer"
                target="_blank"
              >
                <FaXTwitter
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={40}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61552738314598"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineFacebook
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={40}
                />
              </a>
              <a
                href="https://www.instagram.com/donovan_villanueva88/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineInstagram
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={40}
                />
              </a>
              </div>
          </div>

          <div className="flex flex-row items-center justify-center space-x-2 mb-1">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Email
              <div className="flex flex-row items-center justify-center space-x-2 mb-1">
              <p>
              <span className="font-light text-lg">
                  donovanreu88@outlook.com
                </span>
              </p>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
