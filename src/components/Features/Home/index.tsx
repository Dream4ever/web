import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useMemo, useRef } from "react";

import ActionFade from "./ActionFade/index";
import ActionLabel from "./ActionLabel";

type HeaderProps = {
  clickWaitlist?: () => void;
};

const Home: React.FC<HeaderProps> = ({ clickWaitlist }) => {
  return (
    <div className="relative flex items-end justify-center w-full">
      <div className="absolute z-0 hidden w-full h-screen lg:block md:block">
        <img
          src="/images/home/middle_web.svg"
          alt="background"
          className="absolute hidden md:block lg:block md:w-full md:left-0 md:top-[70vh]"
        />
        <img
          src="/images/home/top_web.svg"
          alt="background"
          className="absolute hidden top-0 right-0 h-[248px] w-[408px] md:block lg:block"
        />
      </div>
      <div className="absolute z-[9999] w-full lg:block left-0 top-0">
        <ActionLabel
          className="top-[33vh] -left-[2vh] md:top-[33vh] md:left-[18vw] lg:top-[33vh] lg:left-[18vw]"
          label="1.325"
          imgUrl="/images/home/icons/comment.svg"
          dotSName="bottom-[7vh] left-[5vw] md:bottom-[11vh] md:left-[3vw] lg:bottom-[11vh] lg:left-[3vw]"
          dotCName="bottom-[10vh] left-[0vw] md:bottom-[5vh] md:left-[4vw] lg:bottom-[5vh] lg:left-[4vw]"
        />
        <ActionLabel
          className="top-[5.5vh] left-[13vw] md:-top-[4vh] md:left-[28vw]"
          label="#HODL"
          dotSName="-top-[5vh] left-[10vw] md:-top-[4vh] md:left-[4vw]"
          dotCName="-top-[8vh] left-[0vw] md:-top-[10vh] md:left-[2vw]"
        />
        <ActionLabel
          className="top-[5.5vh] right-[10vw] md:-top-[3vh] md:right-[28vw]"
          label="$1,185"
          imgUrl="/images/home/icons/budget.svg"
          dotSName="-top-[8vh] right-[15vw] md:-top-[13vh] md:right-[3vw]"
          dotCName="-top-[10vh] right-[3vw] md:-top-[8vh] md:right-[5vw]"
        />
        <ActionLabel
          className="top-[32vh] -right-[5vw] md:top-[36vh] md:right-[20vw]"
          imgUrl="/images/home/icons/aptos.svg"
          dotSName="hidden"
          dotCName="top-[3vh] right-[8vw] md:top-[3vh] md:right-[5vw]"
        />
      </div>
      <div className="absolute z-0 block w-full md:hidden">
        <img
          src="/images/home/left_mobile.svg"
          alt="background"
          className="top-0 left-0 hidden md:block lg:block"
        />
        <img
          src="/images/home/right_mobile.svg"
          alt="background"
          className="absolute top-[20vh] hidden md:block lg:block right-0"
        />
      </div>

      <div className="-mb-[50px] md:mb-[0px] lg:-mb-[0px] z-10 flex flex-col items-center text-center md:pr-10 lg:pr-0">
        <span className="text-[36px] md:text-[48px] lg:text-[56px] font-bold mt-[115px]">
          The Web 3 social network on
        </span>
        <ActionFade
          imgUrl="/images/home/btn_aptos.svg"
          replaceImgUrl="/images/home/btn_solana.svg"
        />
        <span className="text-[20px] lg:text-[32px] font-medium mt-8">
          The Non-EVM Social Layer
          <br></br>
          for Mass Adoption
        </span>
        <div className="flex justify-center w-full gap-2 mt-8 lg:gap-6 md:gap-6 md:item-center lg:justify-center">
          <button>
            <img src="/images/home/btn_google_play.svg" alt="" />
          </button>
          <button>
            <img src="/images/home/btn_app_store.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
