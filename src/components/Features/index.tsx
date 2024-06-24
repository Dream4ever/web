import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";

import Screen from "./screen";
import MobileScreen from "./mobileScreen";
import Background from "./background";
import MobileBackground from "./mobileBackground";
import Home from "./Home";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const [offset, setOffset] = useState(700);

  useEffect(() => {
    setOffset(window.innerHeight / 2);
  }, []);

  const ref = useRef(null);

  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#home",
      start: "top top+=-0px",
      end: "top top+=-600px",
      onUpdate: (self) => {
        if (ref.current != null && (ref.current as any).style != null) {
          let node = ref.current as any;
          if (window.innerHeight <= 945)
            node.style.transform = `translate(0, calc(${-26 * self.progress}% - ${10 * self.progress}px))`;
          else if (window.innerHeight <= 1050)
            node.style.transform = `translate(0, calc(${-25 * self.progress}% - ${10 * self.progress}px))`;
          else if (window.innerHeight <= 1181)
            node.style.transform = `translate(0, calc(${-24 * self.progress}% - ${10 * self.progress}px))`;
          else if (window.innerHeight <= 1260)
            node.style.transform = `translate(0, calc(${-27 * self.progress}% - ${10 * self.progress}px))`;
          console.log(window.innerHeight);
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      className="bg-black features-wrapper component md:block lg:block"
      id="home"
    >
      <Controller>
        <Scene duration={3000} pin offset={`${offset}px`}>
          <div className="relative w-full">
            {window.innerWidth < 768 ? (<MobileBackground />) : (<Background />)}
            <div ref={ref}>
              <Home />
              <div className="hidden md:block">
                <Screen />
              </div>
              <div className="block md:hidden">
                <MobileScreen />
              </div>
            </div>
          </div>
        </Scene>
      </Controller>
    </div>
  );
}

export default Features;
