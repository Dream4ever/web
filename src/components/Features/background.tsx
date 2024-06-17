import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ReactNode, useMemo, useRef } from "react";

function Background({ children }: { children: ReactNode }) {
  const backgroundRef = useRef(null);

  const bgStart = "linear-gradient(169.95deg, #5E409E 7.53%, #352557 94.82%)";
  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#feature",
      start: "top top+=-2400px",
      end: "top top+=-3000px",
      onUpdate: (self) => {
        if (
          backgroundRef.current != null &&
          (backgroundRef.current as any).style != null
        ) {
          let node = backgroundRef.current as any;
          const progress = self.progress;

          const startColor1 = { r: 0x5e, g: 0x40, b: 0x9e };
          const endColor1 = { r: 0x00, g: 0x00, b: 0x00 };
          const startColor2 = { r: 0x35, g: 0x25, b: 0x57 };
          const endColor2 = { r: 0x00, g: 0x00, b: 0x00 };

          const currentColor1 = {
            r: startColor1.r + progress * (endColor1.r - startColor1.r),
            g: startColor1.g + progress * (endColor1.g - startColor1.g),
            b: startColor1.b + progress * (endColor1.b - startColor1.b),
          };

          const currentColor2 = {
            r: startColor2.r + progress * (endColor2.r - startColor2.r),
            g: startColor2.g + progress * (endColor2.g - startColor2.g),
            b: startColor2.b + progress * (endColor2.b - startColor2.b),
          };

          node.style.background = `linear-gradient(169.95deg, rgb(${currentColor1.r}, ${currentColor1.g}, ${currentColor1.b}) 7.53%, rgb(${currentColor2.r}, ${currentColor2.g}, ${currentColor2.b}) 94.82%)`;
        }
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      className="w-full h-[100vh] relative overflow-hidden"
      style={{ background: bgStart }}
      ref={backgroundRef}
    >
      {children}
    </div>
  );
}

export default Background;
