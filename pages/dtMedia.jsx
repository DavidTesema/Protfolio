import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import cryptoImg from "../public/assets/projects/dt-media3.png";
import Link from "next/link";

const dtMedia = () => {
  return (
    <div className="w-full h-full dark:bg-gray-900 dark:text-white">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">DT media</h2>
          <h3>React JS / Material-UI / RapidAPI</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The DT media project is a web application built using the React
            library, RapidAPI, and Material UI. The purpose of the project is to
            allow users to search for and view videos from DT media directly on
            the web application.
            <br />
            <br />
            <strong>React</strong>: is a popular JavaScript library used for
            building user interfaces. It allows for the creation of reusable
            components and helps with managing state changes in an application.
            <br />
            <strong>RapidAPI</strong>: is a platform that provides access to thousands of APIs,
            including the DT media API. The DT media API allows developers to
            retrieve data from DT media such as video information, comments, and
            search results.
            <br />
            <strong>Material UI</strong>:  is a React component library that provides pre-built UI
            components such as buttons, forms, and icons. It allows developers
            to quickly build responsive and aesthetically pleasing web
            applications.
            <br />
            <br />
            Using these technologies, the DT media project allows users to
            search for videos based on keywords and retrieve a list of videos
            matching the search query. Users can then select a video from the
            search results to view its details, including its title,
            description, thumbnail, and view count. The video can also be played
            directly on the web application.
            <br />
            <br />
            Overall, the DT media project provides a user-friendly interface for
            searching and viewing DT media videos without having to leave the
            web application.
          </p>
          <a
            href="https://dtmedia.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/DavidTesema/react-youtube-project"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Material-UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Rapid API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default dtMedia;
