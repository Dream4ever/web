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
    <div
      ref={homeRef}
      className="relative flex items-end justify-center w-full h-[60vh] opacity-100"
    >
      <div className="absolute top-0 left-0 z-0 w-full">
        <img src="/assets/home/banner.png" className="absolute top-0 right-0 w-[160px] md:w-auto" />
      </div>
      <div className="absolute top-0 left-0 z-0 hidden w-full h-screen lg:block md:block">
        <img
          src="/assets/home/middle_web.svg"
          alt="background"
          className="absolute hidden md:block lg:block md:w-full md:left-0 md:bottom-0"
        />
        <img
          src="/assets/home/top_web.svg"
          alt="background"
          className="absolute hidden top-0 right-0 h-[248px] w-[408px] md:block lg:block"
        />
      </div>
      <div className="absolute z-[9999] w-full min-h-[900px] lg:block left-0 top-0">
        <ActionLabel
          className="top-[33vh] -left-[2vh] md:top-[33vh] md:left-[18vw] lg:top-[33vh] lg:left-[18vw]"
          label1="942"
          label2="1.325"
          imgUrl1={"/assets/home/swap.svg"}
          imgUrl2={"/assets/home/comment.svg"}
          dotSName="bottom-[8vh] left-[5vw] md:bottom-[11vh] md:left-[3vw] lg:bottom-[11vh] lg:left-[4vw]"
          dotCName="bottom-[10vh] left-[0vw] md:bottom-[5vh] md:left-[4vw] lg:bottom-[5vh] lg:left-[6vw]"
        />
        <ActionLabel
          className="top-[5.5vh] left-[13vw] md:-top-[4vh] md:left-[28vw]"
          label1="#MOON"
          label2="#HODL"
          dotSName="-top-[2vh] left-[10vw] md:-top-[4vh] md:left-[4vw] lg:-top-[1vh] lg:left-[7vw]"
          dotCName="-top-[2vh] left-[0vw] md:-top-[10vh] md:left-[2vw] lg:-top-[2vh] lg:left-[5vw]"
        />
        <ActionLabel
          className="top-[5.5vh] right-[10vw] md:-top-[3vh] md:right-[28vw]"
          label1="$2,842"
          label2="$1,185"
          imgUrl1="/assets/home/heart.svg"
          imgUrl2="/assets/home/budget.svg"
          dotSName="-top-[3vh] right-[15vw] md:-top-[13vh] md:right-[3vw] lg:-top-[5vh] lg:right-[3vw]"
          dotCName="-top-[2vh] right-[3vw] md:-top-[8vh] md:right-[5vw] lg:-top-[3vh] lg:right-[5vw]"
        />
        <ActionLabel
          className="top-[27vh] left-[72vw] md:top-[36vh] md:right-[20vw]"
          imgUrl1="/assets/home/aptos.svg"
          imgUrl2="/assets/home/solana.svg"
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
        <span className="text-[36px] md:text-[48px] lg:text-[56px] font-bold mt-[115px]">
          The Web 3 social network on
        </span>
        <ActionFade
          className="w-[200px] md:w-[264px] h-[58px] md:h-[74px]"
          comp1={<img src="/assets/home/btn_aptos.svg" />}
          comp2={<img src="/assets/home/btn_solana.svg" />}
        />
        <span className="text-[20px] lg:text-[32px] font-medium mt-6">
          The Non-EVM Social Layer
          <br></br>
          for Mass Adoption
        </span>
        <div className="flex justify-center w-full gap-2 mt-6 lg:gap-6 md:gap-6 md:item-center lg:justify-center">
          <button>
            <img src="/assets/home/btn_google_play.svg" alt="" />
          </button>
          <button>
            <img src="/assets/home/btn_app_store.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
