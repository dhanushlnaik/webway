import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { TypeAnimation } from "react-type-animation";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

const LandingText: React.FC = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center text-center ">
          <h1 className="text-6xl font-bold text-[#5b6d42] dark:text-white">
            Your one stop for {"\n"}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "gifts.",
                1000,
                "packages.",
                1000,
                // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mt-4 text-lg text-[#5b6d42] dark:text-white"></p>
          <Link
            href="/main"
            className={buttonVariants({
              variant: "green",
              size: "sm",
            })}
          >
            Get Started
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingText;
