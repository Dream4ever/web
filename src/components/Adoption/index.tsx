import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";

import Background from "./background";
import Screen from "./screen";

gsap.registerPlugin(ScrollTrigger);

function Adoption() {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  return (
    <div
      className="hidden bg-black features-wrapper component md:block lg:block"
      id="adoption"
      data-component="Adoption"
    >
      <Controller>
        <Scene duration={3000} pin offset={`${offset}px`}>
          <div className="relative w-full">
            <Background>
              <Screen />
            </Background>
          </div>
        </Scene>
      </Controller>
    </div>
  );
}

export default Adoption;
