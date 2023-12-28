import Image from "next/image";
import Link from "next/link";
import React from "react";
import djiStore from "../public/assets/projects/DJI-STORE.jpg";
import nioCars from "../public/assets/projects/nio-car.jpg";
import movies from "../public/assets/projects/log-in.jpg";
import media from "../public/assets/projects/dt-media3.png";

import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full dark:bg-gray-900 dark:text-white">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#a82e2e]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Dji Store"
            backgroundImg={djiStore}
            projectUrl="/dji"
            tech="React JS"
          />
          {/* <ProjectItem
              title="NIO CARS"
              backgroundImg={nioCars}
              projectUrl="/nio"
              tech="React JS"
            /> */}
          {/* <ProjectItem
            title="movies"
            backgroundImg={movies}
            projectUrl="/movies"
            tech="React JS"
          /> */}
          <ProjectItem
            title="DT media"
            backgroundImg={media}
            projectUrl="/dtMedia"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
}
