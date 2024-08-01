import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";

import Screen from "./screen";
import MobileScreen from "./mobileScreen";

gsap.registerPlugin(ScrollTrigger);

function SocialGraph() {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  return (
    <div className="" id="socialgraph">
      <div className="hidden md:block">
        <Controller>
          <Scene duration={1000} pin offset={`${offset}px`}>
            <div className="relative flex justify-center w-full">
              <Screen />
            </div>
          </Scene>
        </Controller>
      </div>
      <div className="block md:hidden">
        <Controller>
          <Scene duration={700} pin offset={`${offset}px`}>
            <div className="relative flex justify-center w-full">
              <MobileScreen />
            </div>
          </Scene>
        </Controller>
      </div>
    </div>
  );
}

export default SocialGraph;
