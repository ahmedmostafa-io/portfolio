import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h2 className="heading text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        A small selection of recent projects
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-8 p-4 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link, liveLink }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] min-h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="flex relative items-center justify-center md:w-[500px] md:h-[32vh] lg:w-[570px] lg:h-[40vh] w-[80vw] overflow-hidden h-[30vh]  mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-2xl bg-[#111827]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className={`z-10 absolute bottom-0  ${
                    id === 2
                      ? "object-center object-contain"
                      : id === 1
                      ? "object-cover object-top"
                      : "object-cover object-center"
                  } w-full h-full`}
                />
              </div>
              <h2 className="lg:text-2xl text-white font-bold md-text-xl text-base line-clamp-1">
                {title}
              </h2>
              <p className="text-sm lg:text-xl lg:font-normal  text-[#c1c2d3] font-light line-clamp-2 mt-2">
                {des}
              </p>
              <div className="flex mt-7 mb-3 items-center justify-center">
                <div className="flex items-center">
                  {iconLists.map((icon, idx) => (
                    <div
                      key={icon}
                      className=" border border-white/[0.2] rounded-full bg-black w-10 h-10  m-1 p-1 flex items-center justify-center  transition-all duration-200"
                      style={{ transform: `translateX(-${5 * idx * 2}px)` }}
                    >
                      <img
                        src={icon}
                        alt="tech-icon"
                        className={`p-2 ${
                          icon === "/ai.svg" && " bg-blue-600 rounded-full"
                        } `}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-200\">
                  <a
                    href={liveLink}
                    target="_blank"
                    className="flex  text-purple-400 font-semibold"
                  >
                    Check Live Site
                  </a>
                  <FaLocationArrow className="ms-3" color={"#CBACF9"} />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
