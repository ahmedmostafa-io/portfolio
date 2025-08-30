import React, { ReactNode } from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <>
      <button
        className="relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none md:w-60 md:mt-10 lg:w-72 active:translate-y-0 active:scale-95 transition-all duration-100 ease-in"
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer gap-2 items-center justify-center rounded-lg bg-slate-950 px-7  text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
        >
          {position === "left" && icon}
          {title} {position === "right" && icon}
        </span>
      </button>
    </>
  );
};

export default MagicButton;
