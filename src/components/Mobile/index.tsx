import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";

import Screen from "./screen";
import MobileScreen from "./mobileScreen";

gsap.registerPlugin(ScrollTrigger);

function Mobile() {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  return (
    <div
      className="md:block lg:block"
      id="mobile"
    >
      <Controller>
        <Scene duration={3000} pin offset={`${offset}px`}>
          <div className="relative flex justify-center w-full mb-[50vh]">
            <div className="hidden md:block">
              <Screen />
            </div>
            <div className="block md:hidden">
              <MobileScreen />
            </div>
          </div>
        </Scene>
      </Controller>
    </div>
  );
}

export default Mobile;
