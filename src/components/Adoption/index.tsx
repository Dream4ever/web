import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";

import Screen from "./screen";
import MobileScreen from "./mobileScreen";

function Adoption() {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  return (
    <div
      className=""
      id="adoption"
    >
      <Controller>
        <Scene duration={3000} pin offset={`${offset}px`}>
          <div className="flex items-center justify-center">
            <div className="hidden md:contents lg:contents">
              <Screen />
            </div>
            <div className="contents md:hidden lg:hidden">
              <MobileScreen />
            </div>
          </div>
        </Scene>
      </Controller>
    </div>
  );
}

export default Adoption;
