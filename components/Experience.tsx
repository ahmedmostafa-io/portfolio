import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <section className="pt-10 pb-20" id="experience">
      <h2 className="heading text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        My Professional Journey
      </h2>
      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10">
        {workExperience.map(({ id, title, desc, thumbnail }) => (
          <Button
            key={id}
            borderRadius="1.75rem"
            className={`flex-1 text-white border-neutral-200 dark:border-slate-200`}
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className=" flex lg:flex-row flex-col lg:items-center  px-3 py-6 gap-2 lg:p-10">
              <img
                src={thumbnail}
                alt={thumbnail}
                className="w-16 md:w-20 lg:w-32 "
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {title}
                </h1>
                <p className="text-start text-gray-100 mt-3 font-semibold">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
