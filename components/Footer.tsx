import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h2 className="heading text-4xl  font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Ready to take your digital presence to the next level ?
        </h2>
        <p className="text-gray-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ahmedmostafa.codes@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between space-y-4 md:space-y-0  items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; {new Date().getFullYear()} Ahmed{" "}
        </p>

        <div className="flex justify-center items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-gray-800/75 rounded-lg border border-gray-500"
            >
              <Image
                src={profile.img}
                alt={String(profile.id)}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
