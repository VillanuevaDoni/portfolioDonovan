import React from "react"
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2024 Donovan Villanueva<a href="/" className="hover:underline"></a>
        </div>
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
    </footer>
  )
}

export default Footer
