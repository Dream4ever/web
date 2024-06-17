import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ReactNode, useMemo, useRef } from "react";

function Background({ children }: { children: ReactNode }) {
  const backgroundRef = useRef(null);

  const bgStart = "linear-gradient(165.04deg, #000000 0.94%, #000000 48.34%, #000000 64.04%)";
  useMemo(() => {
    ScrollTrigger.create({
      trigger: "#adoption",
      start: "top top+=-2800px",
      end: "top top+=-3300px",
      onUpdate: (self) => {
        if (
          backgroundRef.current != null &&
          (backgroundRef.current as any).style != null
        ) {
          let node = backgroundRef.current as any;
          const progress = self.progress;

          const startColor1 = { r: 0x00, g: 0x00, b: 0x00 };
          const endColor1 = { r: 0x4E, g: 0x86, b: 0xAC };
          const startColor2 = { r: 0x00, g: 0x00, b: 0x00 };
          const endColor2 = { r: 0x21, g: 0x74, b: 0x7E };
          const startColor3 = { r: 0x00, g: 0x00, b: 0x00 };
          const endColor3 = { r: 0x13, g: 0x5F, b: 0x69 };
          // background: linear-gradient(165.04deg, #4EB6AC 0.94%, #21747E 48.34%, #135F69 64.04%);

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

          const currentColor3 = {
            r: startColor3.r + progress * (endColor3.r - startColor3.r),
            g: startColor3.g + progress * (endColor3.g - startColor3.g),
            b: startColor3.b + progress * (endColor3.b - startColor3.b),
          };

          node.style.background = `linear-gradient(169.95deg, rgb(${currentColor1.r}, ${currentColor1.g}, ${currentColor1.b}) 0.94%, rgb(${currentColor2.r}, ${currentColor2.g}, ${currentColor2.b}) 48.34%, rgb(${currentColor3.r}, ${currentColor3.g}, ${currentColor3.b}) 64.0%)`;
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
