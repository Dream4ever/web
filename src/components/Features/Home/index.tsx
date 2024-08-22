import "./index.css";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import ActionFade from "./ActionFade/index";
import ActionLabel from "./ActionLabel";

type HeaderProps = {
  clickWaitlist?: () => void;
};

const Home: React.FC<HeaderProps> = ({ clickWaitlist }) => {
  const homeRef = useRef(null);

  const calcOpacity = (progress: number) => {
    return progress < 0.5 ? (0.5 - progress) / 0.5 : 0;
  };

  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-0px",
      end: "top top+=-600px",
      onUpdate: (self) => {
        if (homeRef.current != null && (homeRef.current as any).style != null) {
          let node = homeRef.current as any;
          node.style.opacity = calcOpacity(self.progress);
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="relative" ref={homeRef}>
      <div
        className="relative flex items-end justify-center w-full h-[50vh] opacity-100 overflow-hidden"
        style={{ height: `calc(50vh + 170px)` }}
      >

        <div className="absolute z-[0] w-full left-0 bottom-0">
          <ActionLabel
            className="bottom-[320px] left-[1vw] md:bottom-[320px] md:left-[28vw]"
            label1="#MOON"
            label2="#HODL"
            // dotSName="-top-[2vh] left-[10vw] md:-top-[4vh] md:left-[4vw] lg:-top-[1vh] lg:left-[7vw]"
            dotCName="-top-[2vh] -left-[50vw] md:-top-[10vh] md:left-[2vw] lg:-top-[2vh] lg:left-[5vw]"
          />
          <ActionLabel
            className="bottom-[290px] -right-[5vw] md:bottom-[240px] md:right-[28vw]"
            label1="$2,842"
            label2="$1,185"
            imgUrl1="/assets/home/heart.svg"
            imgUrl2="/assets/home/budget.svg"
            imgClassName="w-[29px] md:w-[33px]"
            dotSName="-top-[50px] right-[115px] md:-top-[13vh] md:right-[3vw] lg:-top-[5vh] lg:right-[3vw]"
            dotCName="-top-[80px] right-[95px] md:-top-[8vh] md:right-[5vw] lg:-top-[3vh] lg:right-[5vw]"
          />
          <ActionLabel
            className="bottom-[50px] -left-[40px] md:bottom-[30px] md:left-[15vw]"
            label1="942"
            label2="1.325"
            imgUrl1={"/assets/home/swap.svg"}
            imgUrl2={"/assets/home/comment.svg"}
            dotSName="bottom-[127px] left-[40px] md:bottom-[11vh] md:left-[3vw] lg:bottom-[11vh] lg:left-[4vw]"
            dotCName="bottom-[85px] left-[60px] md:bottom-[5vh] md:left-[4vw] lg:bottom-[5vh] lg:left-[6vw]"
          />
          <ActionLabel
            className="bottom-[10px] -right-[45px] md:bottom-[0px] md:right-[20vw]"
            imgUrl1="/assets/home/monad.svg"
            imgUrl2="/assets/home/monad.svg"
            imgClassName="w-[29px] md:w-[42px]"
            dotSName="hidden"
            dotCName="top-[7vh] -right-[5vw] md:top-[3vh] md:right-[5vw] md:top-[8vh] md:right-[6vw]"
          />
        </div>
        <div className="absolute z-0 block w-full md:hidden">
          <img
            src="/assets/home/left_mobile.svg"
            alt="background"
            className="top-0 left-0 hidden md:block lg:block"
          />
          <img
            src="/assets/home/right_mobile.svg"
            alt="background"
            className="absolute top-[20vh] hidden md:block lg:block right-0"
          />
        </div>

        <div className="z-10 flex flex-col items-center text-center md:pr-10 lg:pr-0">
          <span className="text-[36px] md:text-[48px] lg:text-[56px] font-bold">
            The Web 3 social network on
          </span>
          {/* <ActionFade
            className="w-[200px] md:w-[264px] h-[58px] md:h-[74px]"
            comp1={<img src="/assets/home/btn_monad.svg" />}
            comp2={<img src="/assets/home/btn_aptos.svg" />}
          /> */}
          <div className="w-[200px] md:w-[264px] h-[58px] md:h-[74px]">
            <img src="/assets/home/btn_monad.svg" alt="" />
          </div>
          <span className="text-[20px] lg:text-[32px] font-medium mt-6">
            The consumer-facing layer for<br />
            user onboarding to Web3
          </span>
          {/* <div className="flex justify-center w-full gap-2 mt-6 lg:gap-2 md:gap-2 md:item-center lg:justify-center">
            <a href="/download">
              <img src="/assets/join/android.svg" alt="" />
            </a>
            <a href="/download">
              <img src="/assets/join/app-store.svg" alt="" />
            </a>
          </div> */}
        </div>
      </div>
      <div className="absolute top-0 left-0 z-0 block w-full h-screen md:hidden">
        <img
          src="/assets/home/mobile_top_web.svg"
          alt="background"
          className="absolute block md:hidden top-0 -right-0 h-[127px] w-[161px] opacity-40"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 hidden w-full h-screen md:block">
        <img
          src="/assets/home/middle_web.svg"
          alt="background"
          className="absolute hidden md:block md:w-full md:left-0 md:bottom-0"
        />
        <img
          src="/assets/home/new_top_web.svg"
          alt="background"
          className="absolute hidden -top-[139px] -right-20 h-[248px] w-[408px] md:block"
        />
      </div>
    </div>
  );
};

export default Home;
