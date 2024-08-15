import React, { useState } from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import { BsDiscord } from "react-icons/bs";

import { images } from "../../constants/images";

type HeaderProps = {
  clickWaitlist?: () => void;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};


const SideBar = (
  <div
    className={`block fixed w-full h-screen inset-0 bg-gray-dark-1 z-50`}
  >
    <div className="fixed top-0 right-0 z-50 flex flex-col items-center justify-between w-full h-screen gap-4 bg-[#211738]">
      <div className="h-10 mt-10">
        <div className="flex items-center justify-between gap-2">
        </div>
      </div>
      <div className="fixed flex flex-col items-center gap-8 top-[40%]">
        <a href="/blog"
          className="text-[#FFFFFF] font-Outfit text-[22px] font-medium leading-[120%]">
          Town Blog
        </a>
        <a href="/download" className="text-[#FFFFFF] font-Outfit text-[22px] font-medium leading-[120%]">
          Download app
        </a>
      </div>
      <div className="absolute bottom-[100px]">
        <div className="flex items-center gap-6">
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
        </div>
      </div>
    </div>
  </div>
)

const Header: React.FC<HeaderProps> = ({ clickWaitlist }) => {
  const [show, setShow] = useState(false);


  return (
    <div>
      {show == true && (
        <>
          {SideBar}
        </>
      )}
      <div className="fixed z-[9999] flex justify-between w-full px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href="/" className="flex gap-2">
            <img
              className="cursor-pointer w-7 h-7 md:w-11 md:h-11"
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
                <span className="font-[Urbanist] text-[18px] md:text-[28px] font-bold text-white">
                  townesquare
                </span>
              </Tween>
            </ScrollTrigger>
          </a>
        </div>
        <div className="items-center hidden gap-4 md:gap-8 md:flex">
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
          <a href="/blog" className="hidden md:block justify-center text-center items-center px-6 py-[9px] text-base text-white w-[140px] h-12 font-bold leading-normal border-2 border-[#9264F8] hover:text-[#B882FF] active:bg-black active:text-[#6646AE] rounded-full cursor-pointer">
            Town Blog
          </a>
          <a href="/download" className="hidden md:block justify-center text-center items-center px-6 py-4 text-base text-white w-[170px] h-12 leading-4 font-medium bg-[#9264F8] hover:bg-[#9C6EEB] active:bg-[#AAAAAA] rounded-full cursor-pointer">
            Download app
          </a>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          {show == false ? (
            <button
              onClick={() => { setShow(true) }}>
              <img src="/assets/menu.svg" alt="" />
            </button>
          ) : (
            <button
              onClick={() => { setShow(false) }}>
              <img src="/assets/home/close.svg" alt="" />
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default Header;
