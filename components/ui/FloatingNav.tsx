"use client";
import React, { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    title: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const handleDownload = () => {
    toast.success("Cv Downloaded Successfully");
  };

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border  border-white/[0.2] rounded-full bg-black  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 py-1 md:px-5 md:py-3 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center justify-center flex  md:space-x-1  dark:hover:text-neutral-300 hover:text-neutral-500 group"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="!cursor-pointer text-sm ">{navItem.title}</span>
            <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px group-hover:via-pink-400  " />
          </a>
        ))}
        <a
          href="CV/Ahmed_Mostafa_Frontend_Developer.pdf"
          download
          onClick={handleDownload}
          className="border text-sm font-medium relative border-white/[0.2] text-white sm:px-2 sm:py-1 px-4 py-2 rounded-full group hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:text-white transition-all duration-200"
        >
          <span>
            <span className="hidden md:inline-block"> My </span> Cv{" "}
            <FaCloudDownloadAlt className="inline-block" />
          </span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:via-red-600 h-px" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
