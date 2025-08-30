"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl  grid-cols-1 gap-4 md:auto-rows-[14rem] md:grid-cols-8 ",
        className
      )}
    >
      {children}
    </div>
  );
};
export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;

  id?: string | number | undefined;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("ahmedmostafa.codes@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none justify-between flex flex-col space-y-4  hover:border-purple-400/50  ",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundImage:
          "linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(139,92,246,1) 35%, rgba(236,72,153,0.7) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full `}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={title?.toString()}
              className={cn(imgClassName, " object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={title?.toString()}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute flex w-full h-full items-center inset-0 z-50 text-white font-bold  pointer-events-none text-lg  lg:text-3xl"></div> */}
          </BackgroundGradientAnimation>
        )}
      </div>
      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div
          className={`font-sans font-extralight ${
            id === 3 ? "lg:flex lg:justify-start pr-16 " : ""
          }  text-sm md:text-xs lg:text-base z-10 text-neutral-300`}
        >
          {description}
        </div>
        <div
          className={`font-sans text-lg pb-6 ${
            id === 3 ? "lg:flex lg:justify-start pr-16" : ""
          } lg:text-3xl max-w-96 font-bold z-10 text-white`}
        >
          {title}
        </div>

        {id === 2 && <GlobeDemo />}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-4 lg:mt-5">
              {["React", "Next.js", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] hover:scale-105 hover:opacity-100 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-4">
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              {["TailwindCSS", "JavaScript", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] hover:scale-105 hover:opacity-100 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {id === 6 && (
          <div className="mt-5 md:mb-14 md:mr-5  relative">
            <div className="absolute -bottom-5 right-0">
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <MagicButton
              title={copied ? "Email Copied" : "Copy My Email "}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="bg-purple-400/10 hover:bg-purple-400/20"
              handleClick={handleCopy}
            />
          </div>
        )}
        {/*   this is to avoid layout shift when image loads */}
      </div>
    </div>
  );
};
