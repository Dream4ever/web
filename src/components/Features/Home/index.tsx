import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useMemo, useRef } from "react";

import ActionFade from "./ActionFade/index";
import ActionLabel from "./ActionLabel";

type HeaderProps = {
  clickWaitlist?: () => void;
};

const Home: React.FC<HeaderProps> = ({ clickWaitlist }) => {
  return (
    <div className="flex items-end justify-center w-full h-[50vh] relative">
      <div className="absolute z-0 hidden w-full h-screen lg:block">
        <img
          src="/images/home/middle_web.svg"
          alt="background"
          className="absolute bottom-0 left-0 w-full"
        />

        <img
          src="/images/home/top_web.svg"
          alt="background"
          className="absolute top-0 right-0 h-[248px] w-[408px]"
        />
      </div>
      <div className="absolute z-[9999] hidden w-full lg:block left-0 top-0">
        <ActionLabel
          className="top-[33vh] left-[18vw]"
          label="1.325"
          imgUrl="/images/home/icons/comment.svg"
          dotSName="bottom-[11vh] left-[3vw]"
          dotCName="bottom-[5vh] left-[4vw]"
        />
        <ActionLabel
          className="-top-[4vh] left-[28vw]"
          label="#HODL"
          dotSName="-top-[4vh] left-[4vw]"
          dotCName="-top-[10vh] left-[2vw]"
        />
        <ActionLabel
          className="-top-[3vh] right-[28vw]"
          label="$1,185"
          imgUrl="/images/home/icons/budget.svg"
          dotSName="-top-[13vh] right-[3vw]"
          dotCName="-top-[8vh] right-[5vw]"
        />
        <ActionLabel
          className="top-[36vh] right-[20vw]"
          imgUrl="/images/home/icons/aptos.svg"
          dotSName="hidden"
          dotCName="top-[3vh] right-[5vw]"
        />
      </div>
      <div className="absolute z-0 block w-full md:hidden">
        <img
          src="/images/home/left_mobile.svg"
          alt="background"
          className="top-0 left-0"
        />
        <img
          src="/images/home/right_mobile.svg"
          alt="background"
          className="absolute top-[20vh] right-0"
        />
      </div>

      <div className="flex flex-col z-10 max-w-[800px] md:pr-10 lg:pr-0 items-center text-center">
        <span className="text-[40px] md:text-[48px] lg:text-[56px] font-bold">
          The Web 3 social network on
        </span>
        <ActionFade
          imgUrl="/images/home/btn_aptos.svg"
          replaceImgUrl="/images/home/btn_solana.svg"
        />
        <span className="text-[24px] lg:text-[32px] font-medium mt-8">
          The Non-EVM Social Layer
          <br></br>
          for Mass Adoption
        </span>
        <div className="flex justify-center w-full gap-6 mt-8 md:item-center lg:justify-center">
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
