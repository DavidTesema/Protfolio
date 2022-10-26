import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail ,AiOutlinePhone} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";


export default function Contact() {
  return (
    <div
      id="contact"
      className="w-full md:h-screen p-2 flex flex-col items-center py-16 lg:hidden dark:bg-gray-900"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 text-gray-600 dark:text-white">
        <div className="col-span-1">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-700  rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">David Tesema</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/davidtesema/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/DavidTesema"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href={"mailto:davidtassama464@gmail.com"}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 dark:shadow-gray-700  cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  </Link>
                  <Link href="tel:+972522958514">
                    <a>
                      <div className="rounded-full shadow-lg shadow-gray-400  dark:shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlinePhone />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#a82e2e]" size={30} />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
