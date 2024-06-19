import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";

import Screen from "./screen";

function Adoption() {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  return (
    <div
      className="hidden md:block lg:block"
      id="adoption"
    >
      <Controller>
        <Scene duration={3000} pin offset={`${offset}px`}>
          <div className="relative flex justify-center w-full h-screen">
            <Screen />
          </div>
        </Scene>
      </Controller>
    </div>
  );
}

export default Adoption;
