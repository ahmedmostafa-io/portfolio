"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlights";
import { GridBackgroundDemo } from "./ui/Background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="py-20 h-full w-full " id="home">
      {/* Spotlights */}
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight
          className="bottom-10 right-0 md:bottom-20 md:right-32 h-[60vh] w-[40vw]"
          fill="pink"
        />
        <Spotlight
          className="top-1/3 -left-1/4 h-[70vh] w-[45vw]"
          fill="cyan"
        />
        <Spotlight
          className="bottom-1/4 left-1/3 h-[80vh] w-[50vw]"
          fill="violet"
        />
        <Spotlight
          className="top-1/2 right-1/4 h-[70vh] w-[45vw]"
          fill="orange"
        />
        <Spotlight className="top-1/3 right-1/2 h-[70vh] w-[45vw]" fill="red" />
        <Spotlight
          className="top-1/2 right-1/2 h-[70vh] w-[45vw]"
          fill="blue"
        />
        <Spotlight className="bottom-0 left-0 h-[50vh] w-[35vw]" fill="lime" />
      </div>

      {/* Hero Content */}
      <div>
        <GridBackgroundDemo>
          <div className="flex justify-center ">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl flex flex-col items-center justify-center text-center ">
              {/* Tagline */}
              <h2 className="uppercase tracking-widest text-sm text-blue-300 mb-2">
                Dynamic Web Magic with Next.js
              </h2>

              {/* Name (Animated Gradient Text) */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Hi, I&apos;m Ahmed Mostafa
              </motion.h1>

              {/* Role */}
              <div className="mt-3 text-lg md:text-xl text-gray-300">
                Front-End Developer | React & Next.js Enthusiast
              </div>

              {/* Animated Description */}
              <TextGenerateEffect
                className="mt-6 text-gray-200 text-base md:text-lg lg:text-xl max-w-2xl"
                words="Passionate Front-End Developer crafting responsive, high-performance, and user-friendly interfaces"
                filter={true}
                duration={0.8}
              />

              {/* CTA Button */}
              <a href="#about" className="z-50 mt-8 ">
                <MagicButton
                  title={"Show My Work"}
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses=" hover:bg-purple-400/20"
                />
              </a>
            </div>
          </div>
        </GridBackgroundDemo>
      </div>
    </div>
  );
};

export default Hero;
