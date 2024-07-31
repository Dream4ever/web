import React from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import { BsDiscord } from "react-icons/bs";

import { images } from "../../constants/images";

type HeaderProps = {
  clickWaitlist?: () => void;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const Header: React.FC<HeaderProps> = ({ clickWaitlist }) => {
  return (
    <div className="fixed z-[9999] flex justify-between w-full px-4 py-4 md:px-6">
      <div className="flex items-center gap-2">
        <a href="/">
          <img
            className="cursor-pointer w-7 h-7 md:w-11 md:h-11"
            src={images.logo}
            alt="logo"
            onClick={scrollToTop}
          />
        </a>
        <ScrollTrigger start="0px" end="220px" scrub={0.5}>
          <Tween
            from={{
              opacity: 1,
            }}
            to={{
              opacity: 0,
            }}
          >
            <span className="font-[Urbanist] text-[18px] md:text-[28px] font-bold text-white">
              townesquare
            </span>
          </Tween>
        </ScrollTrigger>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="h-6 md:h-8">
          <a
            href="https://x.com/townesquarexyz"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/twitter.svg"
              alt="twitter_image"
              className="h-6 md:h-8"
            />
          </a>
        </div>
        <div className="h-6 md:h-8">
          <a
            href="https://discord.gg/yMRmqFzrDW"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/discord.svg"
              alt="twitter_image"
              className="h-6 md:h-8"
            />
          </a>
        </div>
        <a href="/download" className="hidden md:block justify-center text-center items-center px-6 py-4 text-base text-white w-[170px] h-12 leading-4 font-medium bg-[#9264F8] hover:bg-[#9C6EEB] active:bg-[#AAAAAA] rounded-full cursor-pointer">
          Download app
        </a>
      </div>
    </div>
  );
};

export default Header;
