import React from 'react'
import { BsGithub, BsGit } from "react-icons/bs";
import { images } from '../../constants/images';
import { ScrollTrigger, Tween } from 'react-gsap';

type HeaderProps = {
  clickWaitlist?: () => void;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const Header: React.FC<HeaderProps> = ({ clickWaitlist }) => {
  return (
    <div
      className="fixed z-20 flex justify-between w-full px-6 py-4"
    >
      <div className="flex items-center gap-2">
        <img className="w-6 h-6 cursor-pointer md:w-8 lg:w-12 md:h-8 lg:h-12" src={images.logo} alt="logo" onClick={scrollToTop} />
        <ScrollTrigger start="0px" end="220px" scrub={0.5}>
          <Tween from={{
            opacity: 1
          }} to={{
            opacity: 0
          }}
          >
            <span
              className="font-[Urbanist] text-[22px] md:text-[35px] lg:text-[42px] font-bold text-white"
            >
              TowneSquare
            </span>
          </Tween>
        </ScrollTrigger>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="w-6 h-6 md:w-8 md:h-8">
          <a href="https://twitter.com/TowneSquarexyz" target='_blank' rel="noreferrer">
            <img src="/images/twitter.svg" alt="twitter_image" />
          </a>
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8">
          <a href="https://github.com/TowneSquare" target='_blank' rel="noreferrer">
            <BsGithub
              size="auto"
              style={{
                color: "#F2F0FF",
              }}
            />
          </a>
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8">
          <a href="https://docs.townesquare.xyz/townesquare-whitepaper/" target='_blank' rel="noreferrer">
            <BsGit
              size="auto"
              style={{
                color: "#F2F0FF",
              }}
            />
          </a>
        </div>
        <button
          className="hidden md:block px-6 py-2 text-[18px] text-white font-semibold bg-[#9264F8] hover:bg-[#9C6EEB] active:bg-[#AAAAAA] rounded-full cursor-pointer"
        // onClick={clickWaitlist}
        >
          Download app
        </button>
      </div>
    </div>
  )
}

export default Header