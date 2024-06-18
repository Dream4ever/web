import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";

import Screen from "./screen";

gsap.registerPlugin(ScrollTrigger);

function Adoption() {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  return (
    <div
      className="hidden md:block lg:block"
      id="mobile"
    >
      <Controller>
        <Scene duration={3000} pin offset={`${0}px`}>
          <div className="relative w-full">
            <Screen />
          </div>
        </Scene>
      </Controller>
    </div>
  );
}

export default Adoption;
