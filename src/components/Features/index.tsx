import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";

import Screen from "./screen";
import MobileScreen from "./mobileScreen";
import Background from "./background";
import MobileBackground from "./mobileBackground";
import Home from "./Home";
import { useRotation } from "../../RotationContext";

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
          const off = window.innerWidth > 768 ? 720 : 680;
          node.style.transform = `translate(0, calc(-${off * self.progress}px))`;
        }
      },
    });
    ScrollTrigger.refresh();
  }, []);

  const { rotation, setRotation } = useRotation();

  const handleMouseMove = (event: any) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth/2;
      const centerY = window.innerHeight/2;
      const xRotation = (clientY - centerY) / 20;
      const yRotation = (clientX - centerX) / 20;

      setRotation({ x: xRotation, y: yRotation, transition: "none" });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      id="home"
    >
      <Controller>
        <Scene duration={2500} pin offset={`${offset}px`}>
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
