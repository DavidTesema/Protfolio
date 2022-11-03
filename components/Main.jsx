import Link from "next/link";
import React from "react";
import { AiOutlineMail ,AiOutlinePhone } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// AiOutlinePhone

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center dark:bg-gray-900  text-gray-600  dark:text-white">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <h1 className="py-4 ">
            Hi, I&apos;m <span className="text-[#a82e2e]"> David</span>
          </h1>
          <h1 className="py-2 ">A Front-End Web Developer</h1>
          <p className="py-4sm:max-w-[70%] m-auto">
            I'm focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/davidtesema/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/DavidTesema"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="mailto:davidtassama464@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="tel:+972522958514">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlinePhone />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
