import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

const Opinions = () => {
  return (
    <div className=" pt-10 pb-20 container mx-auto" id="testimonials">
      <h2 className="heading text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Words That Drive Me Forward
      </h2>
      <p className="text-center text-lg text-gray-400 mt-5 font-bold  px-4">
        Grateful for the guidance and encouraging feedback I’ve received from
        <span className="text-purple-400">
          {" "}
          mentors during my journey at Route.
        </span>
      </p>
      <div className="flex flex-col items-center ">
        <div className="h-[50vh] md:h-full w-full mt-10 rounded-2xl overflow-hidden flex flex-col antialiased items-center relative max-lg:mt-10 ">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10 ">
            {companies.map(({ id, name, img, nameImg }) => (
              <div key={id} className="flex gap-0 md:max-w-44  max-w-32 ">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <p className="md:w-24 w-20">{nameImg}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
