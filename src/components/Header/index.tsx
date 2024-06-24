import React from 'react';
import { ScrollTrigger, Tween } from 'react-gsap';
import { BsDiscord, BsGit, BsGithub } from 'react-icons/bs';

import { images } from '../../constants/images';

type HeaderProps = {
  clickWaitlist?: () => void;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const Header: React.FC<HeaderProps> = ({ clickWaitlist }) => {
  return (
    <div className="fixed z-20 flex justify-between w-full px-4 py-4 md:px-6">
      <div className="flex items-center gap-2">
        <img
          className="w-6 h-6 cursor-pointer md:w-8 lg:w-12 md:h-8 lg:h-12"
          src={images.logo}
          alt="logo"
          onClick={scrollToTop}
        />
        <ScrollTrigger start="0px" end="220px" scrub={0.5}>
          <Tween
            from={{
              opacity: 1,
            }}
            to={{
              opacity: 0,
            }}
          >
            <span className="font-[Urbanist] text-[22px] md:text-[35px] lg:text-[42px] font-bold text-white">
              townesquare
            </span>
          </Tween>
        </ScrollTrigger>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="w-6 h-6 md:w-8 md:h-8">
          <a
            href="https://x.com/townesquarexyz"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/twitter.svg" alt="twitter_image" />
          </a>
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8">
          <a
            href="https://discord.gg/yMRmqFzrDW"
            target="_blank"
            rel="noreferrer"
          >
            <BsDiscord
              size="auto"
              style={{
                color: "#F2F0FF",
              }}
            />
          </a>
        </div>
        <button
          className="hidden md:block px-4 py-1.5 text-base text-white font-medium leading-none bg-[#9264F8] hover:bg-[#9C6EEB] active:bg-[#AAAAAA] rounded-full cursor-pointer"
          // onClick={clickWaitlist}
        >
          Download app
          <p className="text-sm">Coming soon</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
