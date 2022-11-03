import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/David.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16  dark:bg-gray-900"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 text-gray-600 dark:text-white">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#a82e2e]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 ">
            I specialize in building mobile responsive front-end UI applications
            that connect with API&apos;s and other backend technologies. I&apos;m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 ">
            I started web developement in 2020 managing multiple e-commerce
            websites on Shopify. I&apos;m looking for a
            challenging role in a technology environment. I like to work in a
            team and I am highly motivated to gain knowledge in the field. I
            also have a great desire for coding and new technologies. In my
            spare time I like to fly drones and travel.
          </p>
        
        </div>
        <div className="w-full my-2 h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl ">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}
